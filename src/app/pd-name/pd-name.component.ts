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
  players: Player[];
  isNewIP: boolean = false;
  genderFiltered: boolean = false;
  unselectedGender: string = '';

  ngOnInit() {
    if (this.isRevisited()) {
      this.router.navigate(['/end'], { replaceUrl: true } );
    } else { 
      this.ipService.getIP().then(data => {
        this.playerService.getPlayers()
            .subscribe(players => {
              this.players = players;

              this.players.some(player => {
                if (data.ip === player.ip) {
                  this.router.navigateByUrl('/sorry');
                }  
                return data.ip === player.ip;
              });

              this.curPlayerService.player.ip = data.ip;
              this.isNewIP = true;
            });
      });
    }
  }
  
  createPlayer() {
    this.genderFiltered = this.unselectedGender === this.gender;

    var newPlayer = new Player(this.firstName, this.age, this.gender, this.genderFiltered);
    this.playerService.addPlayer(newPlayer)
        .subscribe(player => {
          this.curPlayerService.player._id = player._id;
          this.curPlayerService.player.name = player.name;
          this.curPlayerService.player.age = player.age;
          this.curPlayerService.player.gender = player.gender;
          this.curPlayerService.player.mturk_code = player.mturk_code;
          this.curPlayerService.player.gender_filtered = player.gender_filtered;

          if (this.genderFiltered) {
            this.router.navigateByUrl('/sorry', { replaceUrl: true });
          } else {
            this.router.navigateByUrl('/1', { replaceUrl: true });
          }
        });
  }

  isValid() {
    return this.firstName !== '' && typeof this.age !== 'undefined' && this.gender != '';
  }

  // Check to see if player arrived at this page via the browser back button
  isRevisited() {
    return this.curPlayerService.getName() !== '';
  }

  showPage() {
    return this.isNewIP && !this.isRevisited();
  }
}
