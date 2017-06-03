import { Component, OnInit, OnDestroy } from '@angular/core';

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

export class PDGameComponent implements OnInit, OnDestroy {
  playerImagePath: string;
  oppImagePath: string;

  constructor(private playerService: PlayerService,
              private curPlayerService: CurrentPlayerService,
              private gameService: GameService) {
    this.playerImagePath = '/assets/images/self.png';
    this.oppImagePath = '/assets/images/opp.png';
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.gameService.setPopulation(); 
  }

  ngOnDestroy() {
  }

}
