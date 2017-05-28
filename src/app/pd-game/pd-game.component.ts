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
  choice: boolean;
  selfContrib: number;
  oppContrib: number;
  totalSelfContrib: number[];
  totalOppContrib: number[];
  condition: number = 1;
  pCoop1: number = 0.2;
  pCoop2: number = 0.8;
  roundNumber: number=1;

  constructor(private playerService: PlayerService,
              private curPlayerService: CurrentPlayerService) { }

  ngOnInit() {
    
  }

  playGame() {
    for (var i=1; i<=80; i++) {

    }
  }

}
