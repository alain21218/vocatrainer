import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() icon:string;

  constructor() { }

  ngOnInit() {
  }

}
