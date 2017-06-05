import { Component, OnInit } from '@angular/core';

import { CurrentPlayerService } from '../players/current-player.service';

@Component({
  selector: 'pd-gender',
  templateUrl: './pd-gender.component.html',
  styleUrls: ['./pd-gender.component.css']
})

export class PDGenderComponent implements OnInit {

  mturk_code: string = this.curPlayerService.player.mturk_code;

  constructor(private curPlayerService: CurrentPlayerService) { }

  ngOnInit() {
  }

}
