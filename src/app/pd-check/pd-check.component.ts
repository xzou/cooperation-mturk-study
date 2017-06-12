import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pd-check',
  templateUrl: './pd-check.component.html',
  styleUrls: ['./pd-check.component.css']
})
export class PDCheckComponent implements OnInit {

  constructor(private router: Router) { }

  checkChoice: string = '';
  
  ngOnInit() {
  }

  isAnswered() {
    return this.checkChoice === 'human' || this.checkChoice === 'computer';
  }

  submitAnswer() {
    this.router.navigateByUrl('/code', { replaceUrl: true });
  }
  





}
