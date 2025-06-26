import { Component } from '@angular/core';

@Component({
  selector: 'app-governance',
  imports: [],
  templateUrl: './governance.component.html',
  styleUrl: './governance.component.css'
})
export class GovernanceComponent { 
  ngOnInit() {
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/15%20Governance?csf=1&web=1&e=xkxUp9';
  }

}
