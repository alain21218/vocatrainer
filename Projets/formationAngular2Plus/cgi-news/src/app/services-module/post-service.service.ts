import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PostServiceService {

  private _posts = new Array<Post>();
  private _categories = new Array<Category>();

  constructor(private http: HttpClient) {
    this.http
      .get<any[]>(environment.api + "/posts?_embed=comments")
      .do(res => this._posts.length = 0)
      .map(res => this._posts.push(...res))
      .do(res => console.log(this._posts))
      .subscribe(res => console.log(res))

    this.http
      .get<any[]>(environment.api + "/categories")
      .do(res => this._categories.length = 0)
      .map(res => this._categories.push(...res))
      .subscribe(res => console.log(this._categories));
  }

  public get posts() {
    return this._posts;
  }

  public get categories(){
    return this._categories;
  }

  public postsByCateg(id) {
    return this._posts.filter(i => i.categoryId === id);
  }

}
