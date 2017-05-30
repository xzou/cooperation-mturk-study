import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  constructor() { }

  choice: string = '';
  player: number[] = [];
  opponent: number[] = [];
  selfContrib: number = 0;
  oppContrib: number = 0;
  totalPoints: number = 100;
  feedbackSelf: string;
  feedbackOpp: string;
  oppMoved: boolean = false; 
  population: number[]; 
  interval: any;
  pCoop1: number = .2;
  pCoop2: number = 1-this.pCoop1;
  pCoop: number = this.pCoop1;
  condition: number = 1;
  roundNumber: number = 1;
  submitted: boolean = false;
  oppAnswered: boolean = false;
  waiting: boolean = false;
  probability: number = 0.5;
  isSlider: boolean = false;

  setContrib() {
    if (this.choice === 'cooperate') {
      this.selfContrib = 20;
    } else if (this.choice === 'defect') {
      this.selfContrib = 0;
    } 
    this.submitted = true;
    this.addSelfContrib(this.selfContrib);
    this.setFeedbackSelf();
    this.waiting = true;
    this.setOppMoved();
  }

  /* Samples from {1,0} with probability of selecting 1 equal to pCoop
   * and probability of selecting 0 equal to 1-pCoop */
  setOppContrib() {
    var idx = Math.floor(Math.random() * this.population.length);
    var oppChoice = this.population[idx];
    if (oppChoice === 0) {
      this.oppContrib = 0;
    } else if (oppChoice === 1) {
      this.oppContrib = 20;
    }
    this.addOppContrib(this.oppContrib);
    this.waiting = false;
    this.setFeedbackOpp();
    this.setTotalPoints();
    this.oppAnswered = true;
  }

  setOppMoved() {
    var waitTime: number = Math.random()*5000;
    setTimeout( () => {
      this.setOppContrib();
    }, waitTime);
    return this.oppMoved;
  }

  addSelfContrib(contrib: number) {
    this.player.unshift(contrib);
  }

  addOppContrib (contrib: number) {
    this.opponent.unshift(contrib);
  }

  getSelfContrib() {
    return this.player[0];
  }

  getOppContrib() {
    return this.opponent[0];
  }

  nextRound() {
    this.submitted = false;
    this.roundNumber += 1;
    this.setPCoop();
    this.oppAnswered = false;
    if (this.roundNumber % 5 === 0) {
      this.isSlider = true;
    } else {
      this.isSlider = false;
    }
  }

  getChoice(player: string) {
    var contrib: number;
    if (player === 'self') {
      contrib = this.getSelfContrib(); 
    } else if (player === 'opp') {
      contrib = this.getOppContrib();
    }

    if (contrib === 20) {
      var choice = 'cooperate';
    } else if (contrib === 0) {
      var choice = 'defect';
    }
    return choice;
  }

  setPopulation() {
    if (this.pCoop === 0.2) {
      this.population = [1,1,0,0,0,0,0,0,0,0];
    } else if (this.pCoop === 0.8) {
      this.population = [1,1,1,1,1,1,1,1,0,0];
    } 
    return this.population;
  }

  setPCoop() {
    if (this.condition === 1) {
      if (this.roundNumber === 5) {
        this.pCoop = this.pCoop2;
        this.setPopulation();
      }
    } else if (this.condition === 2) {
        if (this.roundNumber === 20 || this.roundNumber === 60) {
          this.pCoop = this.pCoop2;
          this.setPopulation();
        } else if(this.roundNumber === 40) {
          this.pCoop = this.pCoop1;
          this.setPopulation();
        }
    } else if (this.condition === 3) {
      if (this.roundNumber === 10 || 
          this.roundNumber === 30 ||
          this.roundNumber === 50 ||
          this.roundNumber === 70) {
        this.pCoop = this.pCoop2;
        this.setPopulation();
      } else if (this.roundNumber === 20 ||
                this.roundNumber === 40 ||
                this.roundNumber === 60) {
        this.pCoop = this.pCoop1;
        this.setPopulation();
      }
    }
  }
  
  setTotalPoints() {
    var points = this.totalPoints;

    points += this.getOppContrib()*2 - this.getSelfContrib();
    if (points < 100) {
      this.totalPoints = 100;
    } else {
      this.totalPoints = points;
    }
  }

  getTotalPoints() {
    return this.totalPoints;
  }

  setFeedbackSelf() {
    var choice = this.getChoice('self');
    var contrib: number = this.getSelfContrib();
    this.feedbackSelf = 'You chose to ' + choice + '. You contributed ' 
      + contrib + ' points to give Kai ' + contrib*2 + ' points.';
  }

  setFeedbackOpp() {
    var choice = this.getChoice('opp');
    var contrib: number = this.getOppContrib();
    this.feedbackOpp = 'Kai chose to ' + choice + '. Kai contributed '
      + contrib + ' points to give you ' + contrib*2 + ' points.';
  }

  isAnswered() {
    return this.choice ==='cooperate' || this.choice === 'defect';
  }

  isOppAnswered() {
    return this.oppAnswered;
  }

  isSubmitted() {
    return this.submitted;
  }

  isGameOver() {
    if (this.isSubmitted() && this.roundNumber === 10 && this.oppAnswered === true) {
      return true;
    } else {
      return false;
    }
  }

  showNextButton() {
    return !this.isSubmitted() || !this.isOppAnswered() || this.isGameOver();
  }

  isWaiting() {
    return this.waiting;
  }
}
