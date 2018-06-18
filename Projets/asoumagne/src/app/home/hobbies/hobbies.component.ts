import { Component, OnInit } from '@angular/core';
import { IDisplayComponent } from '../IDisplay.component';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'cs-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) {
    super(profileSvc);
  }

  ngOnInit() {
  }

}
