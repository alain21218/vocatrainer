import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class ProfileService {
  private HASH_PASS = "HASH_PASS";

  public profile:any;
  public connected = false;

  constructor(private http:HttpClient, private router:Router) {
    this.init();
  }

  public init() {
    this.getProfile().subscribe(
      done => this.profile = done,
      error => console.error(error)
    );

    this.retrieveSession();
  }

  public getProfile() {
    return this.http.get(`${environment.api}/profile`);
  }

  public save() {
    return this.http.put(`${environment.api}/profile`, this.profile);
  }

  public logout() {
    this.connected = false;
    localStorage.removeItem(this.HASH_PASS);
  }

  public connection(pass:string) {
    return this.connectionFromHash(CryptoJS.SHA256(pass).toString());
  }

  private connectionFromHash(hash:string) {
    return this.http.get(`${environment.api}/credentials?pass=${hash}`)
      .do( item => {
        if(item) {
          this.connected = true;
          localStorage.setItem(this.HASH_PASS, hash);
        } else {
          this.logout();
        }
      });
  }

  public retrieveSession() {
    const hash = localStorage.getItem(this.HASH_PASS);
    if(hash) this.connectionFromHash(hash).subscribe(
      done => this.connected ? this.router.navigate(['admin']) : null
    );
  }
}
