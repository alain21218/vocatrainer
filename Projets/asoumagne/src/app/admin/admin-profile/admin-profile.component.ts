import { Component, OnInit } from '@angular/core';
import { IDisplayComponent } from '../../home/IDisplay.component';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'cs-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent extends IDisplayComponent implements OnInit {

  constructor(private profileSvc:ProfileService) { 
    super(profileSvc);
  }

  ngOnInit() {
  }

  public addRange() {
    this.profile.range.push('');
  }

  public removeRange(index:number) {
    this.profile.range.splice(index, 1);
  }

  public tracker(index:number, obj:any) :number {
    return index;
  }

  public imageChange($event) {
    console.log($event);
  }
}
