import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink , RouterLinkActive , RouterModule , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('role'); 
    localStorage.removeItem('email');
    this.router.navigate(['/app-homepage']);
  }
}
