import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentPlayerService } from '../players/current-player.service';
import { PDIPService } from '../pd-ip.service';

@Component({
  selector: 'pd-name',
  templateUrl: './pd-name.component.html',
  styleUrls: ['./pd-name.component.css'],
  providers: [ PDIPService ]
})

export class PDNameComponent implements OnInit {

  constructor(private router: Router, 
              private curPlayerService: CurrentPlayerService,
              private ipService: PDIPService) { }

  firstName: string = '';

  ngOnInit() {
    if (this.isRevisited()) {
      this.router.navigate(['/end'], { replaceUrl: true } );
    } else { 
      this.ipService.getIP().then(data => {
        if (this.checkIP(data.ip)) {
          console.log('womp womp');
        } else {
            this.curPlayerService.saveIP(data.ip);
        }
      });
    }
  }
  
  setName() {
    this.curPlayerService.saveName(this.firstName);
    this.router.navigateByUrl('/1');
  }

  isValid() {
    return this.firstName !== '';
  }

  // Check to see if player arrived at this page via the browser back button
  isRevisited() {
    return this.curPlayerService.getName() !== '';
  }
  
  checkIP(playerIP) {
    console.log(playerIP);
    return playerIP === '';
  }
}
