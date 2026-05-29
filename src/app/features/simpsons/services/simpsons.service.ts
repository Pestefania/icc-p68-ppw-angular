import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap, delay, timeout } from 'rxjs/operators';
import { SimpsonsResponse, SimpsonsCharacter } from '../models/simpsons.interface';
import { environment } from '../../../../environments/environment'; // ← Importación del entorno

export interface Options {
  page?: number;
  limit?: number;
}

@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  private http = inject(HttpClient);
  
  // Usamos la variable de entorno solicitada por el Ingeniero
  private readonly baseUrl = environment.apiUrl; 
  private readonly cdnImagesUrl = 'https://cdn.thesimpsonsapi.com/500';

  getCharacters(page: number = 1): Observable<SimpsonsResponse> {
    return this.http
      .get<SimpsonsResponse>(`${this.baseUrl}/characters?page=${page}`)
      .pipe(
        map(res => this.normalizeImages(res)),
        catchError(() => throwError(() => new Error('No se pudieron cargar los personajes')))
      );
  }

  getCharactersOptions(options: Options = {}): Observable<SimpsonsResponse> {
    const { page = 1, limit = 10 } = options;
    return this.http
      .get<SimpsonsResponse>(`${this.baseUrl}/characters?page=${page}&limit=${limit}`)
      .pipe(
        map(res => this.normalizeImages(res)),
        tap((response) => console.log('Simpsons API Environment Response:', response)),
        catchError(() => throwError(() => new Error('No se pudieron cargar los personajes')))
      );
  }

  getCharacterById(id: number): Observable<SimpsonsCharacter> {
    return this.http
      .get<SimpsonsCharacter>(`${this.baseUrl}/characters/${id}`)
      .pipe(
        delay(300),
        timeout(5000),
        map((character) => {
          let path = character.portrait_path ? character.portrait_path.trim() : '';
          if (path.startsWith('/')) path = path.substring(1);
          return {
            ...character,
            occupation: character.occupation || 'Sin ocupación registrada',
            portrait_path: `${this.cdnImagesUrl}/${path}`
          };
        }),
        catchError(() => throwError(() => new Error('No se pudo cargar el personaje')))
      );
  }

  private normalizeImages(response: SimpsonsResponse): SimpsonsResponse {
    return {
      ...response,
      results: response.results.map((char) => {
        let path = char.portrait_path ? char.portrait_path.trim() : '';
        if (path.startsWith('/')) {
          path = path.substring(1);
        }
        return {
          ...char,
          portrait_path: `${this.cdnImagesUrl}/${path}`
        };
      })
    };
  }
}