import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PostServiceService } from '../../services-module/post-service.service';

@Component({
  selector: 'cs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private _search = "";

  @Input()
  get search() {
    return this._search;
  }

  @Output() searchChange = new EventEmitter();
  set search(val) {
    this._search = val;
    this.searchChange.emit(this._search);
  }


  constructor(private postService:PostServiceService) { }

  ngOnInit() {
  }

}
