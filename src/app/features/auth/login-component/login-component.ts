import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '../auth.facade';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
  standalone: true,
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authFacade: AuthFacade) {}

  login() {
    this.authFacade.login(this.username, this.password);
  }
}
