import { Component, OnInit } from '@angular/core';
import { IDisplayComponent } from '../../home/IDisplay.component';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'cs-admin-skills',
  templateUrl: './admin-skills.component.html',
  styleUrls: ['./admin-skills.component.css']
})
export class AdminSkillsComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) { 
    super(profileSvc);
  }

  ngOnInit() {
  }

}
