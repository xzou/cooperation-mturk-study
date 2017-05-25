import { Routes, RouterModule } from '@angular/router';

import { PDIntroComponent } from './pd-intro/pd-intro.component';

const routes: Routes = [
  {
    path: 'intro', 
    component: PDIntroComponent 
  },
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
];

export const AppRouterModule = RouterModule.forRoot(routes);




