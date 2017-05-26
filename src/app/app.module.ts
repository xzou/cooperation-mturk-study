import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PDIntroComponent } from './pd-intro/pd-intro.component';
import { PDNavButtonComponent } from './pd-nav-button/pd-nav-button.component';

import { AppRouterModule } from './app-routing.module';
import { PDInstructionsComponent } from './pd-instructions/pd-instructions.component';
import { PDPaymentInfoComponent } from './pd-payment-info/pd-payment-info.component';
import { PDTestQuestionComponent } from './pd-test-question/pd-test-question.component';
import { PDTransitionComponent } from './pd-transition/pd-transition.component';
import { PDGameComponent } from './pd-game/pd-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PDIntroComponent,
    PDNavButtonComponent,
    PDInstructionsComponent,
    PDPaymentInfoComponent,
    PDTestQuestionComponent,
    PDTransitionComponent,
    PDGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
