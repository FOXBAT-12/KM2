import { Component } from '@angular/core';

@Component({
  selector: 'app-toolsused',
  imports: [],
  templateUrl: './toolsused.component.html',
  styleUrl: './toolsused.component.css'
})
export class ToolsusedComponent { 
  ngOnInit(){
    window.location.href='https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/08%20Tools%20Used?csf=1&web=1&e=j7wEkO';
  }

}
