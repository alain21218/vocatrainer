import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostServiceService {

  constructor(private http:HttpClient) { 
    this.http.get("http://localhost:3000/posts")
      .subscribe(res => console.log(res));
  }

}
