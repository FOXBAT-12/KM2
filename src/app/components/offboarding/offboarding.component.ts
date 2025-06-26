import { Component } from '@angular/core';

@Component({
  selector: 'app-offboarding',
  imports: [],
  templateUrl: './offboarding.component.html',
  styleUrl: './offboarding.component.css'
})
export class OffboardingComponent {
  ngOnInit(){
    window.open('https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/29%20OffBoarding?csf=1&web=1&e=bU7zHs', '-blank');
  } 
}
