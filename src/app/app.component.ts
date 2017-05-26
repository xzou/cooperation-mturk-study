import { Component } from '@angular/core';

import { CurrentPlayerService } from './players/current-player.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrentPlayerService]
})

export class AppComponent {
  title = 'Cooperation Experiment';
}
