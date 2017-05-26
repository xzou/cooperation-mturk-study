import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentPlayerService } from '../players/current-player.service';

@Component({
  selector: 'pd-name',
  templateUrl: './pd-name.component.html',
  styleUrls: ['./pd-name.component.css']
})

export class PDNameComponent {

  constructor(private router: Router, private curPlayerService: CurrentPlayerService) { }

  firstName: string = '';

  setName() {
    this.curPlayerService.saveName(this.firstName);
    this.router.navigateByUrl('/1');
  }

  isValid() {
    return this.firstName !== '';
  }

}
