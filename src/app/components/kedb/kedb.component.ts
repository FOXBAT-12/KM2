import { Component } from '@angular/core';

@Component({
  selector: 'app-kedb',
  imports: [],
  templateUrl: './kedb.component.html',
  styleUrl: './kedb.component.css'
})
export class KedbComponent {

    ngOnInit() {
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/02%20KEDB?csf=1&web=1&e=lpm8BE';
  }

}
