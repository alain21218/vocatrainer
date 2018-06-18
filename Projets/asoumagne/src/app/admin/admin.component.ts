import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { IDisplayComponent } from '../home/IDisplay.component';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { $ } from 'protractor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent extends IDisplayComponent implements OnInit {

  tab = 'profile';

  constructor(private profileSvc:ProfileService, private router:Router, private toastr: ToastsManager, vcr: ViewContainerRef) {
    super(profileSvc);
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    
  }

  public save() {
    this.profileSvc.save().subscribe(
      done => this.toastr.success("Mise à jour effectuée"),
      error => (this.toastr.error("Impossible de mettre à jour"), console.log(error))
    )
  }

  public home() {
    this.router.navigate(['']);
  }

  public cancel() {
    this.profileSvc.init();
  }

  public logout() {
    this.profileSvc.logout();
    this.home();
  }
}
