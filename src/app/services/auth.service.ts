import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import * as jwt from 'jwt-client';
import { User } from '../interfaces/user';
import { Token } from '../interfaces/token';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  constructor(private httpLClient: HttpClient, private route: Router) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  get userId() {
    return localStorage.getItem('id') || '';
  }

  saveUserId() {
    // @ts-ignore
    const { sub } = jwtDecode(this.token);
    localStorage.setItem('id', sub);
  }

  validToken() {
    if (this.token !== '') {
      // @ts-ignore
      return jwt.validate(this.token);
    }
    return false;
  }

  signin(user: User) {
    const url = `${environment.apiUrl}/auth/signin`;
    return this.httpLClient.post<Token>(url, user).pipe(
      tap((resp: Token) => {
        this.saveToken(resp.access_token);
        this.saveUserId();
        this.getUser();
      }),
      map(resp => resp),
      catchError(err => of(err.message))
    );
  }

  getUser() {
    const headers = this.headers();
    const url = `${environment.apiUrl}/users/${this.userId}`;
    return this.httpLClient.get<User>(url, { headers }).pipe(
      tap((resp: User) => {
        this.user = resp;
      }),
      map(resp => resp),
      catchError(err => of(err.message))
    );
  }

  private headers() {
    const token = this.token;
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  signup(user: User) {
    const url = `${environment.apiUrl}/auth/signup`;
    return this.httpLClient
      .post<HttpResponse<any>>(url, user, { observe: 'response' })
      .pipe(
        map(resp => resp.ok),
        catchError(err => of(err.message))
      );
  }

  updateUserGenres(genres: string[]) {
    const headers = this.headers();
    const url = `${environment.apiUrl}/users/${this.userId}`;
    return this.httpLClient.patch(url, { genres }, { headers }).pipe(
      map(resp => resp),
      catchError(err => of(err.message))
    );
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/signin');
  }
}
