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
    this.setPayment();
  }

  setPayment() {
    this.payment = (1 + 0.01*(this.curPlayerService.player.player_score - 100)/10).toFixed(2);
    console.log(this.payment);
  }

}
