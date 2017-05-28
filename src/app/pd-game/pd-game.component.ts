import { Component, OnInit } from '@angular/core';

import { PDGameSelfComponent } from './pd-game-self/pd-game-self.component';
import { PDGameOppComponent } from './pd-game-opp/pd-game-opp.component';

import { Player } from '../players/player';

import { PlayerService } from '../players/player.service';
import { CurrentPlayerService } from '../players/current-player.service';
import { GameService } from './game.service';

@Component({
  selector: 'pd-game',
  templateUrl: './pd-game.component.html',
  styleUrls: ['./pd-game.component.css'],
  providers: [ PlayerService, GameService ]
})

export class PDGameComponent implements OnInit {

  totalPoints: number = 100;
  choice: string = '';
  selfContrib: number;
  oppContrib: number;
  totalSelfContrib: number[];
  totalOppContrib: number[];
  condition: number = 1;
  pCoop: number = 0.2;
  roundNumber: number=0;
  submitted: boolean = false;
  population: number[];

  constructor(private playerService: PlayerService,
              private curPlayerService: CurrentPlayerService,
              private gameService: GameService) { }

  ngOnInit() {
    this.population = this.setPopulation();
    this.playGame();
  }

  playGame() {
      this.roundNumber += 1;
      this.setOppContrib(); 
      if (this.isSubmitted()) {
        this.setContrib();
        this.setPoints();
        this.submitted = false;
      } else {
        this.choice = '';
      }
  }

  setContrib() {
    if (this.choice === 'cooperate') {
      this.selfContrib = 20;
    } else if (this.choice === 'defect') {
      this.selfContrib = 0;
    } 
    this.submitted = true;
    this.gameService.addSelfContrib(this.selfContrib);
    this.setPoints();
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
    this.gameService.addOppContrib(this.oppContrib);
  }

  setPopulation() {
    if (this.pCoop === 0.2) {
      this.population = [1,1,0,0,0,0,0,0,0,0];
    } else if (this.pCoop === 0.8) {
      this.population = [1,1,1,1,1,1,1,1,0,0];
    } 
    return this.population;
  }

  nextRound() {
    this.submitted = false;
    this.roundNumber += 1;
    this.setOppContrib();
  }

  setPoints() {
    this.totalPoints += this.gameService.getOppContrib()*2 - this.gameService.getSelfContrib();
    if (this.totalPoints < 100) {
      this.totalPoints = 100;
    }
  }

  isAnswered() {
    return this.choice ==='cooperate' || this.choice === 'defect';
  }

  isSubmitted() {
    return this.submitted;
  }
}
