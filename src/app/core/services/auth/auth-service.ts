import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = 'https://demouno-production.up.railway.app/api/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    const body: LoginRequest = {
      username,
      password,
    };
    if (!body.username || !body.password) {
      return throwError(() => new Error('Username and password are required'));
    }
    return this.http.post<LoginResponse>(this.API_URL, body);
  }
}
