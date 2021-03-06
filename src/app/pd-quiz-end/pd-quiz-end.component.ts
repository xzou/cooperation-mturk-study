import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pd-quiz-end',
  templateUrl: './pd-quiz-end.component.html',
  styleUrls: ['./pd-quiz-end.component.css']
})

export class PDQuizEndComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit () {
    this.router.navigateByUrl('/ended');
  }

}
