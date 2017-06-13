import { Component, OnInit } from '@angular/core';
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

export class PDGameComponent implements OnInit {
  playerImagePath: string;
  oppImagePath: string;
  payment: string;

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
    this.payment = (1 + 0.01*(this.gameService.totalPoints - 100)/10).toFixed(2);
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
      condition: this.gameService.condition,
      payment: this.payment
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
          this.curPlayerService.player.condition = this.gameService.condition;
          this.curPlayerService.player.payment = this.payment; 
          this.router.navigateByUrl('/8', { replaceUrl: true });
        });
  }
}
