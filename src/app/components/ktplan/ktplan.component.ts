import { Component } from '@angular/core';

@Component({
  selector: 'app-ktplan',
  imports: [],
  templateUrl: './ktplan.component.html',
  styleUrl: './ktplan.component.css'
})
export class KtplanComponent { 
  ngOnInit() {
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/26%20KT%20Plan?csf=1&web=1&e=9vAy4u';
  }
}
