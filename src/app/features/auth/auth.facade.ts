import { Injectable } from '@angular/core';
import { AuthService, LoginResponse } from '../../core/services/auth/auth-service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe({
      next: (response: LoginResponse) => {
        if (response.success) {
          // this.router.navigate(['/home']);
          console.log('✅ Login successful:', response.message);
        }
      },
      error: (err) => {
        console.error('🚨 Connection error', err);
      },
    });
  }
}
