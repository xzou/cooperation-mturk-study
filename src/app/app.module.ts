import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { PDIntroComponent } from './pd-intro/pd-intro.component';
import { PDNavButtonComponent } from './pd-nav-button/pd-nav-button.component';

import { AppRouterModule } from './app-routing.module';
import { PDInstructionsComponent } from './pd-instructions/pd-instructions.component';
import { PDPaymentInfoComponent } from './pd-payment-info/pd-payment-info.component';
import { PDTestQuestionComponent } from './pd-test-question/pd-test-question.component';
import { PDTransitionComponent } from './pd-transition/pd-transition.component';
import { PDGameComponent } from './pd-game/pd-game.component';
import { PDNameComponent } from './pd-name/pd-name.component';
import { PDQuizEndComponent } from './pd-quiz-end/pd-quiz-end.component';
import { PDForwardEndComponent } from './pd-forward-end/pd-forward-end.component';
import { PDSorryComponent } from './pd-sorry/pd-sorry.component';
import { PDGameSelfComponent } from './pd-game/pd-game-self/pd-game-self.component';
import { PDGameOppComponent } from './pd-game/pd-game-opp/pd-game-opp.component';
import { PDWaitingComponent } from './pd-game/pd-waiting/pd-waiting.component';
import { PDMturkComponent } from './pd-mturk/pd-mturk.component';
import { PDProbabilitiesComponent } from './pd-game/pd-probabilities/pd-probabilities.component';
import { PDGenderComponent } from './pd-gender/pd-gender.component';
import { PDGameQuestionComponent } from './pd-game/pd-game-question/pd-game-question.component';
import { PDFindingOppComponent } from './pd-finding-opp/pd-finding-opp.component';
import { PDInstructionsMainComponent } from './pd-instructions-main/pd-instructions-main.component';
import { PDCheckComponent } from './pd-check/pd-check.component';
import { PDDebriefingComponent } from './pd-debriefing/pd-debriefing.component';

//import { CurrentPlayerService } from './players/current-player.service';

@NgModule({
  declarations: [
    AppComponent,
    PDIntroComponent,
    PDNavButtonComponent,
    PDInstructionsComponent,
    PDPaymentInfoComponent,
    PDTestQuestionComponent,
    PDTransitionComponent,
    PDGameComponent,
    PDNameComponent,
    PDQuizEndComponent,
    PDForwardEndComponent,
    PDSorryComponent,
    PDGameSelfComponent,
    PDGameOppComponent,
    PDWaitingComponent,
    PDMturkComponent,
    PDProbabilitiesComponent,
    PDGenderComponent,
    PDGameQuestionComponent,
    PDFindingOppComponent,
    PDInstructionsMainComponent,
    PDCheckComponent,
    PDDebriefingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
