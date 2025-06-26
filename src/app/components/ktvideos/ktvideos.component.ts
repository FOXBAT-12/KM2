import { Component } from '@angular/core';

@Component({
  selector: 'app-ktvideos',
  imports: [],
  templateUrl: './ktvideos.component.html',
  styleUrl: './ktvideos.component.css'
})
export class KtvideosComponent { 
  ngOnInit() {
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/28%20KT%20Videos?csf=1&web=1&e=AEgtmJ'
  }

}
