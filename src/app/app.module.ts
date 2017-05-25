import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PDIntroComponent } from './pd-intro/pd-intro.component';
import { NextButtonComponent } from './next-button/next-button.component';

import { AppRouterModule } from './app-routing.module';
import { PDInstructionsComponent } from './pd-instructions/pd-instructions.component';
import { PDPaymentInfoComponent } from './pd-payment-info/pd-payment-info.component'

@NgModule({
  declarations: [
    AppComponent,
    PDIntroComponent,
    NextButtonComponent,
    PDInstructionsComponent,
    PDPaymentInfoComponent
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
