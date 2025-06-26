import { Component } from '@angular/core';

@Component({
  selector: 'app-kmteammember',
  imports: [],
  templateUrl: './kmteammember.component.html',
  styleUrl: './kmteammember.component.css'
})
export class KmteammemberComponent { 
  ngOnInit(){
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/06%20KM%20Team%20Members?csf=1&web=1&e=vBX9JA';
  }

}
