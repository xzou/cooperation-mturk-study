import { Routes, RouterModule } from '@angular/router';

import { PDIntroComponent } from './pd-intro/pd-intro.component';
import { PDInstructionsComponent } from './pd-instructions/pd-instructions.component';
import { PDPaymentInfoComponent } from './pd-payment-info/pd-payment-info.component';
import { PDTestQuestionComponent } from './pd-test-question/pd-test-question.component';

const routes: Routes = [
  {
    path: 'main', 
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
    path: '4',
    component: PDTestQuestionComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
];

export const AppRouterModule = RouterModule.forRoot(routes);




