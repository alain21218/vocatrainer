import { Component, OnInit } from '@angular/core';
import { IDisplayComponent } from '../IDisplay.component';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'cs-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) {
    super(profileSvc);
  }

  ngOnInit() {
  }

}
