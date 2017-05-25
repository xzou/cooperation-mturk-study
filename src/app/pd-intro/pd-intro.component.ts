import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pd-intro',
  templateUrl: './pd-intro.component.html',
  styleUrls: ['./pd-intro.component.css']
})
export class PDIntroComponent {

  constructor(private router: Router) { }
}
