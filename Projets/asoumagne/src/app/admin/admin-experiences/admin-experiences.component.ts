import { Component, OnInit } from '@angular/core';
import { IDisplayComponent } from '../../home/IDisplay.component';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'cs-admin-experiences',
  templateUrl: './admin-experiences.component.html',
  styleUrls: ['./admin-experiences.component.css']
})
export class AdminExperiencesComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) { 
    super(profileSvc);
  }

  ngOnInit() {
  }

  public addExperience() {
    this.profile.experiences.push({
      company: "",
      title: "",
      startdate: null,
      enddate: null,
      description: ""
    });
  }
}
