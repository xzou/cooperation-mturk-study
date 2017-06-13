import { Component, OnInit } from '@angular/core';

import { CurrentPlayerService } from '../players/current-player.service';

@Component({
  selector: 'pd-payment-info',
  templateUrl: './pd-payment-info.component.html',
  styleUrls: ['./pd-payment-info.component.css']
})

export class PDPaymentInfoComponent implements OnInit {

  payment: string;

  constructor(private curPlayerService: CurrentPlayerService) { }

  ngOnInit() {
  }
}
