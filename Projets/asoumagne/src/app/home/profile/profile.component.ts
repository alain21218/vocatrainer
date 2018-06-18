import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';
import { Profile } from '../../shared/models/profile';
import { IDisplayComponent } from '../IDisplay.component';

@Component({
  selector: 'cs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) {
    super(profileSvc);
  }

  ngOnInit() {
  }
}
