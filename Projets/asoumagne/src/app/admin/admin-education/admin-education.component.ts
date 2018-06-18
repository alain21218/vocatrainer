import { Component, OnInit } from '@angular/core';
import { IDisplayComponent } from '../../home/IDisplay.component';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'cs-admin-education',
  templateUrl: './admin-education.component.html',
  styleUrls: ['./admin-education.component.css']
})
export class AdminEducationComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) { 
    super(profileSvc);
  }

  ngOnInit() {
  }

  public addEducation() {
    this.profile.educations.push({
      name: "",
      school: "",
      startdate: null,
      enddate: null,
      description: ""
    });
  }
}
