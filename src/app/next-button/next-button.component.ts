import { Component } from '@angular/core';

@Component({
  selector: 'pd-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent {
  clickMessage = '';
  onClickNext() {
    this.clickMessage = 'UhhhhHHHH'; 
    console.log(this.clickMessage);
  
  }
}
