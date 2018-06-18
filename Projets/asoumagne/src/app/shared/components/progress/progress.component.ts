import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  @Input() value:number;

  constructor() { }

  ngOnInit() {
  }

}
