import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentPlayerService } from '../players/current-player.service';

@Component({
  selector: 'pd-name',
  templateUrl: './pd-name.component.html',
  styleUrls: ['./pd-name.component.css']
})

export class PDNameComponent implements OnInit {

  constructor(private router: Router, private curPlayerService: CurrentPlayerService) { }

  firstName: string = '';

  ngOnInit() {
    if (this.isRevisited()) {
      this.router.navigate(['/end'], {replaceUrl: true} );
    }
  }
  
  setName() {
    this.curPlayerService.saveName(this.firstName);
    this.router.navigateByUrl('/1');
  }

  isValid() {
    return this.firstName !== '';
  }

  isRevisited() {
    return this.curPlayerService.getName() !== '';
  }

}
