import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'pd-transition',
  templateUrl: './pd-transition.component.html',
  styleUrls: ['./pd-transition.component.css']
})

export class PDTransitionComponent {

  constructor() { }

  is_found: boolean = false;
  private interval: any;

  setFound() {
    this.is_found = true;
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.setFound();
    }, 4000);
  }

  isFound() {
    return this.is_found;
  }

  ngOnDestroy() {
    if (this.interval)
      clearInterval(this.interval);
  }
}
