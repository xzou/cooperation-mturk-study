import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pd-sorry',
  templateUrl: './pd-sorry.component.html',
  styleUrls: ['./pd-sorry.component.css']
})
export class PDSorryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['/end'], { replaceUrl: true });
  }

}
