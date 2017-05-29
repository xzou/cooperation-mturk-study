import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'pd-waiting',
  templateUrl: './pd-waiting.component.html',
  styleUrls: ['./pd-waiting.component.css']
})

export class PDWaitingComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}
