import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

@Component({
  selector: 'pd-probabilities',
  templateUrl: './pd-probabilities.component.html',
  styleUrls: ['./pd-probabilities.component.css']
})

export class PDProbabilitiesComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }
}
