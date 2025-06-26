import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, RouterLink, CommonModule, FormsModule, HttpClientModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('https://localhost:7244/api/Auth/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        const token = res.token;
        localStorage.setItem('jwt', token);

        // Decode token to get role
        let decoded: any;
        try {
          decoded = jwtDecode(token);
        } catch (e) {
          this.error = 'Invalid token received!';
          return;
        }

        // Try common claim keys for role
        const role =
          decoded.role ||
          decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ||
          decoded['roles'] ||
          '';

        // Store role in localStorage for easy access
        localStorage.setItem('role', role); 
        localStorage.setItem('email' , this.email)

        if (role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'user') {
          this.router.navigate(['/app-homepage']);
        } else {
          this.error = 'Unknown role!';
        }
      },
      error: () => {
        this.error = 'Invalid email or password!';
      }
    });
  }
}
