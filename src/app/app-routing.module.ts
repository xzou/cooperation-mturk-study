import { Routes, RouterModule } from '@angular/router';

import { PDIntroComponent } from './pd-intro/pd-intro.component';
import { PDInstructionsComponent } from './pd-instructions/pd-instructions.component';
import { PDPaymentInfoComponent } from './pd-payment-info/pd-payment-info.component';
import { PDFindingOppComponent } from './pd-finding-opp/pd-finding-opp.component';
import { PDTestQuestionComponent } from './pd-test-question/pd-test-question.component';
import { PDTransitionComponent } from './pd-transition/pd-transition.component';
import { PDGameComponent } from './pd-game/pd-game.component';
import { PDNameComponent } from './pd-name/pd-name.component';
import { PDQuizEndComponent } from './pd-quiz-end/pd-quiz-end.component';
import { PDForwardEndComponent } from './pd-forward-end/pd-forward-end.component';
import { PDSorryComponent } from './pd-sorry/pd-sorry.component';
import { PDMturkComponent } from './pd-mturk/pd-mturk.component';
import { PDGenderComponent } from './pd-gender/pd-gender.component';
import { PDInstructionsMainComponent } from './pd-instructions-main/pd-instructions-main.component';
import { PDCheckComponent } from './pd-check/pd-check.component';

const routes: Routes = [
  {
    path: 'main',
    component: PDNameComponent
  },
  {
    path: '1', 
    component: PDIntroComponent 
  },
  {
    path: '2',
    component: PDInstructionsComponent
  },
  {
    path: '3',
    component: PDFindingOppComponent
  },
  {
    path: '4',
    component: PDInstructionsMainComponent
  },
  {
    path: '5',
    component: PDTestQuestionComponent
  },
  {
    path: '6',
    component: PDGameComponent
  },
  {
    path: '7',
    component: PDCheckComponent
  },
  {
    path: 'code',
    component: PDMturkComponent
  },
  {
    path: 'end',
    component: PDQuizEndComponent
  },
  {
    path: 'ended',
    component: PDForwardEndComponent
  },
  {
    path: 'sorry',
    component: PDSorryComponent
  },
  {
    path: 'filter',
    component: PDGenderComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
];

export const AppRouterModule = RouterModule.forRoot(routes);




