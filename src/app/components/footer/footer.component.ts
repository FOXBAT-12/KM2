import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent { 
  currentYear: number = new Date().getFullYear();
}
