import { Component } from '@angular/core';

@Component({
  selector: 'app-handbook',
  imports: [],
  templateUrl: './handbook.component.html',
  styleUrl: './handbook.component.css'
})
export class HandbookComponent { 
  ngOnInit() {
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/23%20Handbooks?csf=1&web=1&e=NyNM4a';
  }
}
