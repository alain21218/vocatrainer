import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { Profile } from '../shared/models/profile';

@Component({})
export abstract class IDisplayComponent {

  constructor(private _profileSvc:ProfileService) {}

  public get profile():Profile {
    return this._profileSvc.profile ? this._profileSvc.profile : {};
  }

}