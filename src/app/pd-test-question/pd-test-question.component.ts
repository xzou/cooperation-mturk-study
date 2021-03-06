import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../players/player';
import { CurrentPlayerService } from '../players/current-player.service';
import { PlayerService } from '../players/player.service';

@Component({
  selector: 'pd-test-question',
  templateUrl: './pd-test-question.component.html',
  styleUrls: ['./pd-test-question.component.css'],
  providers: [ PlayerService ]
})

export class PDTestQuestionComponent {
  constructor(private router: Router,
              private curPlayerService: CurrentPlayerService,
              private playerService: PlayerService) {} 

  choiceAText: string = `Cooperate means I don't pay anything and 
  can still collect points. Defect means I pay 20 of my own
  points to give the other player 40 points`;
  choiceBText: string = `Cooperate means I pay 20 of my own points to 
  give the other player 40 points. Defect means I don't pay 
  anything and can still collect points.`;
  feedbackCor: string = 'Correct! You may enter the game.';
  feedbackIncor: string = 'Incorrect. This session will now be terminated. Thank you!';
  
  selectedOption: string;
  feedback: string;
  is_correct: boolean;
  is_answered: boolean = false;
  is_submitted: boolean = false;
  interval: any;

  isAnswered() {
    if (this.selectedOption === '1' || this.selectedOption === '2') {
      this.is_answered = true;
      return this.is_answered;
    }
    else 
      console.log('Question not answered');
  }

  checkAnswer() {
    if (this.selectedOption === '1') {
      this.feedback = this.feedbackIncor;
      this.is_correct = false;
      this.is_submitted = true;
      this.interval = setInterval(() => {
        this.router.navigate(['/end'], { replaceUrl: true });
      }, 2000);
    }
    else if (this.selectedOption === '2') {
      this.feedback = this.feedbackCor;
      this.is_correct = true;
      this.is_submitted = true;
    }
    else 
      console.log('Invalid value of quiz answer');

    this.updatePlayer();
    }

  isSubmitted() {
    return this.is_submitted;
  }

  updatePlayer() {
    var updPlayer: Player = {
      _id: this.curPlayerService.player._id,
      ip: this.curPlayerService.player.ip,
      name: this.curPlayerService.player.name,
      age: this.curPlayerService.player.age,
      gender: this.curPlayerService.player.gender,
      mturk_code: this.curPlayerService.player.mturk_code,
      is_complete: this.curPlayerService.player.is_complete,
      is_correct: this.is_correct,
    }
    this.playerService.updatePlayer(updPlayer)
        .subscribe(data => {
          this.curPlayerService.player.is_correct = this.is_correct;
        });
  }

  ngOnDestroy () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

