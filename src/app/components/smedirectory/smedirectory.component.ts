import { Component } from '@angular/core';

@Component({
  selector: 'app-smedirectory',
  imports: [],
  templateUrl: './smedirectory.component.html',
  styleUrl: './smedirectory.component.css'
})
export class SmedirectoryComponent { 
  ngOnInit() {
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/13%20SME%20Directory?csf=1&web=1&e=K0ZA2O';
  }
}
