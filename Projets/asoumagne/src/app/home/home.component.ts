import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { IDisplayComponent } from './IDisplay.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) {
    super(profileSvc)
  }

  ngOnInit() {
    
  }

  
}
