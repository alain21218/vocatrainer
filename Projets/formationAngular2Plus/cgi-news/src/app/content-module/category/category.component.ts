import { Component, OnInit, Input } from '@angular/core';
import { PostServiceService } from '../../services-module/post-service.service';

@Component({
  selector: 'cs-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()categId:number;
  posts:Array<Post>;

  constructor(private postService: PostServiceService) {
  }
  
  ngOnInit() {
    this.posts = this.postService.postsByCateg(this.categId);
  }

}
