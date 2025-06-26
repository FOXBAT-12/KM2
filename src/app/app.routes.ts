import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HeaderComponent } from './components/header/header.component';
import { SopComponent } from './components/sop/sop.component';
import { FAQComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { KedbComponent } from './components/kedb/kedb.component';
import { SkillmatrixComponent } from './components/skillmatrix/skillmatrix.component';
import { KmteammemberComponent } from './components/kmteammember/kmteammember.component';
import { ToolsusedComponent } from './components/toolsused/toolsused.component';
import { DesigndocumentsComponent } from './components/designdocuments/designdocuments.component';
import { SmedirectoryComponent } from './components/smedirectory/smedirectory.component';
import { GovernanceComponent } from './components/governance/governance.component';
import { BestpracticeComponent } from './components/bestpractice/bestpractice.component';
import { HandbookComponent } from './components/handbook/handbook.component';
import { KtplanComponent } from './components/ktplan/ktplan.component';
import { KtvideosComponent } from './components/ktvideos/ktvideos.component';
import { OffboardingComponent } from './components/offboarding/offboarding.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, // Home page
  { path: 'app-homepage', component: HomepageComponent }, // (optional, if you want /app-homepage route)
  {
    path: 'app-footer',
    component: FooterComponent
  },
  {
    path: 'app-aboutus',
    component: AboutusComponent
  },
  {
    path:'app-header',
    component: HeaderComponent
  },
  {
    path:'app-sop',
    component:SopComponent, 
    canActivate:[authGuard]
  },
  {
    path: 'app-faq',
    component:FAQComponent
  },
    {
    path: 'app-contact',
    component:ContactComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  },  
  {
    path: 'app-kedb',
    component:KedbComponent,
    canActivate:[authGuard]
  },
  {
    path:'app-skillmatrix',
    component:SkillmatrixComponent,
    canActivate:[authGuard]
  },
  {
    path:'app-kmteammember',
    component:KmteammemberComponent,
    canActivate:[authGuard]
  },
  {
    path:'app-toolsused',
    component:ToolsusedComponent,
    canActivate:[authGuard]
  },
  {
    path:'app-designdocuments',
    component:DesigndocumentsComponent,
    canActivate:[authGuard]
  },
  {
    path:'app-smedirectory',
    component: SmedirectoryComponent,
    canActivate:[authGuard]
  },
  {
    path:'app-governance',
    component:GovernanceComponent,
    canActivate:[authGuard]
  }, 
  { 
    path: 'app-bestpractice',
    component: BestpracticeComponent,
    canActivate:[authGuard]
  },
  {
    path: 'app-handbook',
    component: HandbookComponent,
    canActivate:[authGuard]
  }, 
  {
    path: 'app-ktplan',
    component:KtplanComponent,
    canActivate:[authGuard]
  },
  {
    path:'app-ktvideos',
    component: KtvideosComponent,
    canActivate:[authGuard]
  },
  {
    path: 'app-offboarding',
    component: OffboardingComponent,
    canActivate:[authGuard]
  },
  {
    path: 'app-onboarding',
    component: OnboardingComponent,
    canActivate:[authGuard]
  }

];
