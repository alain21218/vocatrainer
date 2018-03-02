import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services-module/post-service.service';

@Component({
  selector: 'cs-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private postService:PostServiceService) { 
    console.log(this.postService);
  }

  ngOnInit() {
  }

}
