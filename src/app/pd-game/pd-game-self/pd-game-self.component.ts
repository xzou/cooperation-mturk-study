import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'pd-game-self',
  templateUrl: './pd-game-self.component.html',
  styleUrls: ['./pd-game-self.component.css']
})
export class PDGameSelfComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}


