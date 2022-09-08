import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Genre } from '../interfaces/genre';
import { catchError, map, Observable, of } from 'rxjs';
import { Track } from '../interfaces/track';
import { TrackRecommended } from '../interfaces/track-recommended';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getGenres() {
    const token = this.authService.token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const url = `${environment.apiUrl}/spotify/genres`;
    return this.httpClient.get<Genre>(url, { headers }).pipe(
      map(resp => {
        return resp.genres.map(genre => ({
          name: genre,
          code: genre,
        }));
      }),
      catchError(err => of(err.message))
    );
  }

  getTracksByUser(userId: string): Observable<TrackRecommended> {
    const token = this.authService.token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const url = `${environment.apiUrl}/spotify/tracks/${userId}`;
    return this.httpClient.get<Track>(url, { headers }).pipe(
      map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        image: track.album.images[0].url,
        preview: track.preview_url,
        external: track.external_urls.spotify,
        uri: track.uri,
      })),
      catchError(err => of(err.message))
    );
  }
}
