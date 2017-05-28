import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentPlayerService } from '../players/current-player.service';
import { PDIPService } from '../pd-ip.service';

@Component({
  selector: 'pd-name',
  templateUrl: './pd-name.component.html',
  styleUrls: ['./pd-name.component.css'],
  providers: [ CurrentPlayerService, PDIPService ]
})

export class PDNameComponent implements OnInit {

  constructor(private router: Router, 
              private curPlayerService: CurrentPlayerService,
              private ipService: PDIPService) { }

  firstName: string = '';

  ngOnInit() {
    this.ipService.getIP().subscribe(data => {
      if (this.checkIP(data.ip)) {
        this.router.navigate(['/sorry'], { replaceUrl: true });
      }
    });
    
    if (this.isRevisited()) {
      this.router.navigate(['/end'], { replaceUrl: true } );
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
    return playerIP === '000000';
  }
}
