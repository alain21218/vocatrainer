import { Component, OnInit, Input } from '@angular/core';
import { PostServiceService } from '../../services-module/post-service.service';

@Component({
  selector: 'cs-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()post:Post;

  constructor() { }

  ngOnInit() {
  }
}
