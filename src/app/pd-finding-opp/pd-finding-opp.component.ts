import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pd-finding-opp',
  templateUrl: './pd-finding-opp.component.html',
  styleUrls: ['./pd-finding-opp.component.css']
})

export class PDFindingOppComponent implements OnInit {

  constructor() { }

  is_found: boolean = false;
  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.is_found = true;
    }, 3500);
  }

  ngOnDestroy() {
    if (this.interval)
      clearInterval(this.interval);
  }
}
