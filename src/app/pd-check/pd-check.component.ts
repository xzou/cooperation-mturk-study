import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../players/player';
import { PlayerService } from '../players/player.service';
import { CurrentPlayerService } from '../players/current-player.service';

@Component({
  selector: 'pd-check',
  templateUrl: './pd-check.component.html',
  styleUrls: ['./pd-check.component.css']
})

export class PDCheckComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private curPlayerService: CurrentPlayerService,
              private playerService: PlayerService){ }

  checkChoice: string = '';
  
  ngOnInit() {
  }

  isAnswered() {
    return this.checkChoice === 'human' || this.checkChoice === 'computer';
  }

  submitAnswer() {
    this.router.navigateByUrl('/code', { replaceUrl: true });
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
      contributions: this.curPlayerService.player.contributions,
      opp_contributions: this.curPlayerService.player.opp_contributions,
      probabilities: this.curPlayerService.player.probabilities,
      player_score: this.curPlayerService.player.player_score,
      opp_score: this.curPlayerService.player.opp_score,
      contrib_times: this.curPlayerService.player.contrib_times,
      probabilities_times: this.curPlayerService.player.probabilities_times,
      opp_behavior: this.curPlayerService.player.opp_behavior,
      is_complete: true,
      check_answer: this.checkChoice
    }
  
    this.playerService.updatePlayer(updPlayer)
        .subscribe (data => {
          this.curPlayerService.player.is_complete = true;
          this.curPlayerService.player.check_answer = this.checkChoice;
        });
  }
  





}
