import { Component } from '@angular/core';

@Component({
  selector: 'app-bestpractice',
  imports: [],
  templateUrl: './bestpractice.component.html',
  styleUrl: './bestpractice.component.css'
})
export class BestpracticeComponent { 
  ngOnInit(){
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/16%20Best%20Practices?csf=1&web=1&e=sc7Oxx';
  }

}
