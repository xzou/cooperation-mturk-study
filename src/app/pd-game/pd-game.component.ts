import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router,
              private playerService: PlayerService,
              private curPlayerService: CurrentPlayerService,
              private gameService: GameService) {
    this.playerImagePath = '/assets/images/self.png';
    this.oppImagePath = '/assets/images/opp.png';
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.gameService.choiceT0 = performance.now();
    this.gameService.setPopulation(); 
  }

  goToPaymentInfo() {
    this.router.navigateByUrl('/7', { replaceUrl: true });
  }

  ngOnDestroy() {
    var updPlayer: Player = {
      _id: this.curPlayerService.player._id,
      ip: this.curPlayerService.player.ip,
      name: this.curPlayerService.player.name,
      age: this.curPlayerService.player.age,
      gender: this.curPlayerService.player.gender,
      mturk_code: this.curPlayerService.player.mturk_code,
      is_correct: this.curPlayerService.player.is_correct,
      contributions: this.gameService.playerContribs,
      opp_contributions: this.gameService.oppContribs,
      probabilities: this.gameService.probabilities,
      player_score: this.gameService.totalPoints,
      opp_score: this.gameService.oppTotalPoints,
      contrib_times: this.gameService.contribTimes,
      probabilities_times: this.gameService.probabilitiesTimes,
      opp_behavior: this.gameService.oppBehavior,
      is_complete: true
    }
  
    this.playerService.updatePlayer(updPlayer)
        .subscribe (data => {
          this.curPlayerService.player.contributions = this.gameService.playerContribs;
          this.curPlayerService.player.opp_contributions = this.gameService.oppContribs;
          this.curPlayerService.player.probabilities = this.gameService.probabilities;
          this.curPlayerService.player.player_score = this.gameService.totalPoints;
          this.curPlayerService.player.opp_score = this.gameService.oppTotalPoints;
          this.curPlayerService.player.contrib_times = this.gameService.contribTimes;
          this.curPlayerService.player.probabilities_times = this.gameService.probabilitiesTimes;
          this.curPlayerService.player.opp_behavior = this.gameService.oppBehavior;
          this.curPlayerService.player.is_complete = true;
        });
    
  }

}
