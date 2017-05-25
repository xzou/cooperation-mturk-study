import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pd-nav-button',
  templateUrl: './pd-nav-button.component.html',
  styleUrls: ['./pd-nav-button.component.css']
})
export class PDNavButtonComponent {
  @Input() url: string;
  @Input() label: string;

  constructor(private router: Router) {}

  onClickGoTo = function() {
    this.router.navigateByUrl('/' + this.url);
  }
}
