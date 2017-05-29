import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'pd-game-opp',
  templateUrl: './pd-game-opp.component.html',
  styleUrls: ['./pd-game-opp.component.css']
})
export class PDGameOppComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}
