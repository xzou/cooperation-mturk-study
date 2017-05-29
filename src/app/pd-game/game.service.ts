import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  constructor() { }

  player: number[] = [];
  opponent: number[] = [];
  totalPoints: number;
  feedbackSelf: string;



  getAllSelfContribs() {
    return this.player;
  }

  getAllOppContribs() {
    return this.opponent;
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

  setTotalPoints(points) {
    this.totalPoints = points; 
  }

  getTotalPoints() {
    return this.totalPoints;
  }

  getChoice() {
    if (this.getSelfContrib() === 20) {
      var choice = 'cooperate';
    } else if (this.getSelfContrib() === 0) {
      var choice = 'defect';
    }
    return choice;
  }

  setFeedbackSelf() {
    var choice = this.getChoice();
    var contrib: number = this.getSelfContrib();
    this.feedbackSelf = 'You chose to ' + choice + '. You contributed ' 
      + contrib + ' points to give your opponent ' + contrib*2 + ' points. ';
    console.log(this.feedbackSelf);
  }
}
