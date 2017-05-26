import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentPlayerService } from '../players/current-player.service';

@Component({
  selector: 'pd-intro',
  templateUrl: './pd-intro.component.html',
  styleUrls: ['./pd-intro.component.css'],
  providers: []
})

export class PDIntroComponent {

  constructor(private router: Router, private curPlayerService: CurrentPlayerService) { }

  firstName: string = this.curPlayerService.getName();

}
