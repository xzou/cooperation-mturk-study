import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  player: number[];
  opponent: number[];
  totalPoints: number;

  constructor() { }

  addSelfContrib (contrib: number) {
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
}
