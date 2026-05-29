import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router'; // Requisito del Paso 5
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons.service';
import { PaginationService } from '../../../../shared/services/pagination.service'; 
// Ajusta la ruta de arriba según dónde esté exactamente tu shared/

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [RouterModule], // Añadimos RouterModule aquí
  templateUrl: './simpsons-page.html'
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService); // Debe ser público para usarse en el HTML

  // Límite de elementos por página solicitado por la guía
  readonly charactersPerPage = signal(10);

  // rxResource reactivo: se relanza automáticamente cuando cambia el URL query param (?page=)
  simpsonsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage(),
      limit: this.charactersPerPage(),
    }),
    stream: ({ params }) =>
      this.simpsonsService.getCharactersOptions({
        page: params.page,
        limit: params.limit,
      }),
  });
}