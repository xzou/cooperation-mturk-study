import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pd-instructions-main',
  templateUrl: './pd-instructions-main.component.html',
  styleUrls: ['./pd-instructions-main.component.css']
})
export class PDInstructionsMainComponent implements OnInit {

  constructor(private router: Router) { }
  
  isInstructions: boolean = true;
  isGameScreenshot: boolean = true;
  isProbScreenshot: boolean = false;

  page1: boolean = true;
  page2: boolean = false;
  page3: boolean = false;
  page4: boolean = false;
  page5: boolean = false;
  page6: boolean = false;
  page7: boolean = false;
  page8: boolean = false;
  page9: boolean = false;

  gamePath = '/assets/images/game.png';
  probPath = '/assets/images/probabilities.png';
  coopcoopPath = '/assets/images/coopcoop.png';
  coopdefPath = '/assets/images/coopdef.png';
  defcoopPath = '/assets/images/defcoop.png';
  defdefPath = '/assets/images/defdef.png';
  feedbackPath = '/assets/images/feedback.png';
  paymentPath = '/assets/images/payment.png';

  ngOnInit() {
  }

  setPageOne() {
    this.page1 = false;
    this.page2 = true;
  }

  setPageTwo() {
    this.page2 = false;
    this.page3 = true;
    this.isGameScreenshot = false;
  }

  backPageTwo() {
    this.page1 = true;
    this.page2 = false;
  }

  setPageThree() {
    this.page3 = false;
    this.page4 = true;
  }

  backPageThree() {
    this.page2 = true;
    this.page3 = false;
    this.isGameScreenshot = true;
  }

  setPageFour() {
    this.page4 = false;
    this.page5 = true;
  }

  backPageFour() {
    this.page3 = true;
    this.page4 = false;
  }

  setPageFive() {
    this.page5 = false;
    this.page6 = true;
  }

  backPageFive() {
    this.page4 = true;
    this.page5 = false;
  }

  setPageSix() {
    this.page6 = false;
    this.page7 = true;
  }

  backPageSix() {
    this.page5 = true;
    this.page6 = false;
  }

  setPageSeven() {
    this.page7 = false;
    this.page8 = true;
    this.isInstructions = false;
  }

  backPageSeven() {
    this.page6 = true;
    this.page7 = false;
  }

  setPageEight() {
    this.page8 = false;
    this.page9 = true;
    this.isProbScreenshot = true;
  }

  backPageEight() {
    this.page7 = true;
    this.page8 = false;
    this.isInstructions = true;
  }

  backPageNine() {
    this.page8 = true;
    this.page9 = false;
    this.isProbScreenshot = false;
  }

  goToQuiz() {
    this.router.navigateByUrl('/5', { replaceUrl: true });
  }
}
