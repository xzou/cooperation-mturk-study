import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'pd-transition',
  templateUrl: './pd-transition.component.html',
  styleUrls: ['./pd-transition.component.css']
})

export class PDTransitionComponent {

  constructor() { }

  is_done: boolean = false;
  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.is_done = true;
    }, 3500);
  }

  ngOnDestroy() {
    if (this.interval)
      clearInterval(this.interval);
  }
}
