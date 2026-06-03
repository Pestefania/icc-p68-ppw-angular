import { Component, inject, signal, effect } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons.service';
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
  public authService = inject(AuthService);
  private favoritesService = inject(FavoritesService);

  private characterId = Number(this.route.snapshot.paramMap.get('id'));
  isFavorite = signal(false);

  // Este recurso obtiene UN SOLO personaje por ID
  characterResource = rxResource({
    stream: () => this.simpsonsService.getCharacterById(this.characterId),
  });

  constructor() {
    effect(() => {
      const user = this.authService.currentUser();
      if (user && user.uid) {
        this.favoritesService.getFavoritesByUser(user.uid).subscribe((favs) => {
          const found = favs.some(f => f.characterId === this.characterId);
          this.isFavorite.set(found);
        });
      }
    });
  }

  toggleFavorite() {
    const uid = this.authService.uid;
    if (!uid) return;

    if (this.isFavorite()) {
      this.favoritesService.removeFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(false);
      });
    } else {
      this.favoritesService.addFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(true);
      });
    }
  }
}