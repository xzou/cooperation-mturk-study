import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  constructor() { }

  maxRounds: number = 4;
  firstSlider: number = 2;
  choice: string = '';
  playerContribs: number[] = [];
  oppContribs: number[] = [];
  selfContrib: number = 0;
  oppContrib: number = 0;
  totalPoints: number = 100;
  oppTotalPoints: number = 100;
  probabilities: number[] = [];
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
  isSlider: boolean = false;
  probability: number = 0.5;
  sliderSubmitted: boolean = false;
  sliderToggle: boolean = false;
  gameOver: boolean = false;

  contribTimes: number[] = [];
  probabilitiesTimes: number[] = [];

  choiceT0: number;
  choiceT1: number;
  probT0: number;
  probT1: number;

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
    this.choiceT1 = performance.now();
    var difference = this.choiceT1 - this.choiceT0;
    this.contribTimes.push(difference);
    console.log(this.contribTimes);
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
    this.setTotalPoints('self');
    this.setTotalPoints('opp')
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
    this.playerContribs.push(contrib);
  }

  addOppContrib (contrib: number) {
    this.oppContribs.push(contrib);
  }

  getSelfContrib() {
    return this.playerContribs[this.playerContribs.length-1];
  }

  getOppContrib() {
    return this.oppContribs[this.oppContribs.length-1];
  }

  addProbability () {
    this.probabilities.push(this.probability);
    this.probT1 = performance.now();
    var difference = this.probT1 - this.probT0;
    this.probabilitiesTimes.push(difference);
    console.log(this.probabilitiesTimes);
    this.sliderSubmitted = true;
    this.sliderToggle = true;
    if (this.roundNumber === this.maxRounds) {
      this.gameOver = true;
    } else {
      this.nextRound();
    }
  }

  getProbability() {
    return this.probabilities[0];
  }

  nextRound() {
    if (this.roundNumber % this.firstSlider === 0 && !this.sliderToggle) {
      this.isSlider = true;
      this.probT0 = performance.now();
      this.sliderSubmitted = false;
    } else {
      this.sliderToggle = false;
      this.isSlider = false;
      this.submitted = false;
      this.choiceT0 = performance.now();
      this.setPCoop();
      this.oppAnswered = false;
      this.sliderSubmitted = false;
      this.roundNumber += 1;
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
      if (this.roundNumber === this.firstSlider) {
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
  
  setTotalPoints(person) {
    if (person === 'self') {
      var points = this.totalPoints;
      points += this.getOppContrib()*2 - this.getSelfContrib();
      if (points < 100) {
        this.totalPoints = 100;
      } else {
        this.totalPoints = points;
      }
    } else if (person === 'opp') {
      var points = this.oppTotalPoints;
      points += this.getSelfContrib()*2 - this.getOppContrib();
      if (points < 100) {
        this.oppTotalPoints = 100;
      } else {
        this.oppTotalPoints = points;
      }
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

  showSlider() {
    return this.isSlider && this.submitted && this.oppAnswered && !this.sliderSubmitted;
  }

  hideQuestion() {
    return this.showSlider() || this.submitted;
  }

  hideFeedback() {
    return this.showSlider() || this.gameOver;
  }

  showNextButton() {
    return this.submitted && this.oppAnswered && !this.isGameOver(); 
  }

  isGameOver() {
    if (this.submitted && this.roundNumber === this.maxRounds && this.oppAnswered && this.sliderSubmitted) {
      this.gameOver = true;
    } else {
      this.gameOver = false;
    }
  }

}
