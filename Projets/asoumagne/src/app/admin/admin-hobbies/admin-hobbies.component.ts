import { Component, OnInit } from '@angular/core';
import { IDisplayComponent } from '../../home/IDisplay.component';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'cs-admin-hobbies',
  templateUrl: './admin-hobbies.component.html',
  styleUrls: ['./admin-hobbies.component.css']
})
export class AdminHobbiesComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) { 
    super(profileSvc);
  }

  ngOnInit() {
  }

  public addHobby() {
    this.profile.hobbies.push({
      title: "",
      description: "",
      image: ""
    });
  }
}
