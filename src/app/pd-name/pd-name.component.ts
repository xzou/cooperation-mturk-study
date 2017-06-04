import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../players/player';
import { PlayerService } from '../players/player.service';
import { CurrentPlayerService } from '../players/current-player.service';
import { PDIPService } from '../pd-ip.service';

@Component({
  selector: 'pd-name',
  templateUrl: './pd-name.component.html',
  styleUrls: ['./pd-name.component.css'],
  providers: [ PlayerService, PDIPService ]
})

export class PDNameComponent implements OnInit {

  constructor(private router: Router, 
              private playerService: PlayerService,
              private curPlayerService: CurrentPlayerService,
              private ipService: PDIPService) { }

  firstName: string = '';
  age: number;
  gender: string = '';
  ip: string = '';

  ngOnInit() {
    if (this.isRevisited()) {
      this.router.navigate(['/end'], { replaceUrl: true } );
    } else { 
      this.ipService.getIP().then(data => {
        if (this.checkIP(data.ip)) {
          console.log('womp womp');
        } else {
            this.ip = data.ip;
        }
      });
    }
  }
  
  createPlayer() {
    var newPlayer = new Player(this.ip, this.firstName, this.age, this.gender);
    this.playerService.addPlayer(newPlayer)
        .subscribe(player => {
          this.curPlayerService.player._id = player._id;
          this.curPlayerService.player.ip = player.ip;
          this.curPlayerService.player.name = player.name;
          this.curPlayerService.player.age = player.age;
          this.curPlayerService.player.gender = player.gender;
          this.curPlayerService.player.mturk_code = player.mturk_code;

          this.router.navigateByUrl('/1');
        });
  }

  isValid() {
    return this.firstName !== '' && typeof this.age !== 'undefined' && this.gender != '';
  }

  // Check to see if player arrived at this page via the browser back button
  isRevisited() {
    return this.curPlayerService.getName() !== '';
  }
 
  // Check whether player IP is already in the database
  checkIP(playerIP) {
    return playerIP === '';
  }
}
