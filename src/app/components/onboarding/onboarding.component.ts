import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  imports: [],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent { 
  ngOnInit() {
    window.open(
      'https://cognizantonline.sharepoint.com/:f:/r/sites/DirectEnergy-RepoCognizant/Shared%20Documents/General/07%20Onboarding%20Manual?csf=1&web=1&e=hSqNRS',
      '_blank'
    );
  }
}
