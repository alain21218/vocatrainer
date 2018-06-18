import { Component, OnInit } from '@angular/core';
import { IDisplayComponent } from '../IDisplay.component';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'cs-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) {
    super(profileSvc);
  }

  ngOnInit() {
  }

}
