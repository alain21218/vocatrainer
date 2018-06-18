import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.css']
})
export class PostFooterComponent implements OnInit {
  @Input()comments:Array<Comment>;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
