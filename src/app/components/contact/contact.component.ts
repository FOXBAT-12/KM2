import { CommonModule  } from '@angular/common';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';  
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-contact',
  imports: [HttpClientModule ,CommonModule , FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true
})
export class ContactComponent implements OnInit { 
  contact = {
    name: '',
    email: '',
    message: ''
  };
  success = '';
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Autofill email from localStorage if available
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      this.contact.email = storedEmail;
    }
  }

  sendMessage() {
    this.success = '';
    this.error = '';
    this.http.post('https://localhost:7244/api/Contact_us', this.contact).subscribe({
      next: () => {
        this.success = 'Message sent successfully!';
        this.contact = { name: '', email: this.contact.email, message: '' }; // keep email if logged in
      },
      error: () => {
        this.error = 'Failed to send message. Please try again later.';
      }
    });
  }
}
