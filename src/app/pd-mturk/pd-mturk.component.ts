import { Component, OnInit } from '@angular/core';

import { CurrentPlayerService } from '../players/current-player.service';

@Component({
  selector: 'pd-mturk',
  templateUrl: './pd-mturk.component.html',
  styleUrls: ['./pd-mturk.component.css']
})
export class PDMturkComponent implements OnInit {

  constructor(private curPlayerService: CurrentPlayerService) { }
  
  mturk_code: string;
  ngOnInit() {
    this.mturk_code = this.curPlayerService.player.mturk_code;
  }

}
