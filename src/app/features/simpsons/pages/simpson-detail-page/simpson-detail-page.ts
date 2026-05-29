import { Component, inject, signal, effect } from '@angular/core'; // ← Importamos effect
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons.service';

// 1. IMPORTAMOS LOS NUEVOS SERVICIOS DE FIREBASE Y CORE
import { AuthService } from '../../../../core/services/auth.service';
import { FavoritesService } from '../../../../core/services/favorites.service';

@Component({
  selector: 'app-simpson-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './simpson-detail-page.html',
})
export class SimpsonDetailPageComponent {
  private route = inject(ActivatedRoute);
  private simpsonsService = inject(SimpsonsService);

  // 2. INYECTAMOS LOS SERVICIOS DE AUTENTICACIÓN Y FAVORITOS
  authService = inject(AuthService); // Público para poder leerlo desde el HTML con authService.currentUser()
  private favoritesService = inject(FavoritesService);

  private characterId = Number(
    this.route.snapshot.paramMap.get('id')
  );

  // Signal reactivo para controlar el estado de la estrella en la UI
  isFavorite = signal(false);

  characterResource = rxResource({
    stream: () =>
      this.simpsonsService.getCharacterById(
        this.characterId
      ),
  });

  // 3. EL CONSTRUCTOR SÍ ES UN CONTEXTO DE INYECCIÓN VÁLIDO PARA EFFECTS
  constructor() {
    effect(() => {
      // Vigilamos reactivamente el signal del usuario
      const user = this.authService.currentUser();
      
      // En cuanto Firebase valide la sesión en el navegador (deje de ser null), corre este bloque
      if (user && user.uid) {
        this.favoritesService.getFavoritesByUser(user.uid).subscribe((favs) => {
          // Buscamos si el ID de este personaje ya está en la lista de Firestore del usuario
          const found = favs.some(f => f.characterId === this.characterId);
          this.isFavorite.set(found);
        });
      }
    });
  }

  // 4. MÉTODO PARA GUARDAR O ELIMINAR EL FAVORITO EN LA NUBE
  toggleFavorite() {
    const uid = this.authService.uid;
    if (!uid) return; // Si no hay sesión, no hace nada

    if (this.isFavorite()) {
      // Si ya era favorito, lo removemos de Firestore
      this.favoritesService.removeFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(false);
      });
    } else {
      // Si no era favorito, lo agregamos a Firestore
      this.favoritesService.addFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(true);
      });
    }
  }
}