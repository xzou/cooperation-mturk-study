import { Routes, RouterModule } from '@angular/router';

import { PDIntroComponent } from './pd-intro/pd-intro.component';
import { PDInstructionsComponent } from './pd-instructions/pd-instructions.component';
import { PDPaymentInfoComponent } from './pd-payment-info/pd-payment-info.component';

const routes: Routes = [
  {
    path: 'intro', 
    component: PDIntroComponent 
  },
  {
    path: '2',
    component: PDInstructionsComponent
  },
  {
    path: '3',
    component: PDPaymentInfoComponent
  },
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
];

export const AppRouterModule = RouterModule.forRoot(routes);




