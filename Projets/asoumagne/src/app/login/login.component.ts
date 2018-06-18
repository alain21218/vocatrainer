import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public pass = "";

  constructor(private profileSvc: ProfileService, private router:Router, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  public connection() {
    this.profileSvc.connection(this.pass).subscribe(
      done => {
        done[0] ? this.router.navigate(['admin']) : this.toastr.error("Mauvais mot de passe");
        this.pass = "";
      },
      error => console.error("Error", error)
    )
  }

}
