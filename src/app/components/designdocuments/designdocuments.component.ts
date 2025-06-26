import { Component } from '@angular/core';

@Component({
  selector: 'app-designdocuments',
  imports: [],
  templateUrl: './designdocuments.component.html',
  styleUrl: './designdocuments.component.css'
})
export class DesigndocumentsComponent { 
  ngOnInit(){
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/04%20Design%20Documents%20(LLD%20%26%20HLD)?csf=1&web=1&e=3Z7b70';
  }
}
