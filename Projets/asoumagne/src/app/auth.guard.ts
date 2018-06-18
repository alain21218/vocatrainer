import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from './shared/services/profile.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private profileSvc:ProfileService, private router:Router){}

  canActivate(){
    if(!this.profileSvc.connected){
      this.router.navigate(['login']);
    }
    
    return this.profileSvc.connected;
  }
}
