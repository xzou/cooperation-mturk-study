import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'pd-game-question',
  templateUrl: './pd-game-question.component.html',
  styleUrls: ['./pd-game-question.component.css']
})
export class PDGameQuestionComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}
