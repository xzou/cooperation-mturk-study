import { Component, OnInit } from '@angular/core';

import { CurrentPlayerService } from '../players/current-player.service';
import { PlayerService } from '../players/player.service';
import { Player } from '../players/player';

@Component({
  selector: 'pd-gender',
  templateUrl: './pd-gender.component.html',
  styleUrls: ['./pd-gender.component.css'],
  providers: [ PlayerService ]
})

export class PDGenderComponent implements OnInit {

  mturk_code: string = this.curPlayerService.player.mturk_code;

  constructor(private playerService: PlayerService,
              private curPlayerService: CurrentPlayerService) { }

  ngOnInit() {
    var updPlayer: Player = {
      _id: this.curPlayerService.player._id,
      ip: this.curPlayerService.player.ip,
      name: this.curPlayerService.player.name,
      age: this.curPlayerService.player.age,
      gender: this.curPlayerService.player.gender,
      mturk_code: this.curPlayerService.player.mturk_code,
      is_complete: this.curPlayerService.player.is_complete,
      gender_filtered: this.curPlayerService.player.gender_filtered
    };

    this.playerService.updatePlayer(updPlayer)
        .subscribe(player => {
          console.log('Player updated');
        });
  }  

}
