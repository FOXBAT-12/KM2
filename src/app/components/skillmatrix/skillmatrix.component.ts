import { Component } from '@angular/core';

@Component({
  selector: 'app-skillmatrix',
  imports: [],
  templateUrl: './skillmatrix.component.html',
  styleUrl: './skillmatrix.component.css'
})
export class SkillmatrixComponent { 
  ngOnInit() {
    window.location.href = 'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/03%20Skill%20Matrix?csf=1&web=1&e=5JwsLh';
  }

}
