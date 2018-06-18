import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ProfileService } from './profile.service';
import { Profile } from '../models/profile';

@Injectable()
export class PdfService {

  constructor(private profileSvc:ProfileService) { }

  public download() {
    const promise = new Promise((resolve, reject) => {
      try{
        const doc = new jsPDF();

        doc.text(`${this.profile.firstname} ${this.profile.lastname}`, 10, 10);
        doc.text(this.profile.job, 10, 20);
        doc.text(this.profile.birthdate, 10, 30);
        doc.text(this.profile.free.toString(), 10, 40);
        doc.text(this.profile.car, 10, 50);
        doc.text(this.profile.range.join(" - "), 10, 60);
        doc.text(this.profile.email, 10, 70);

        doc.save(`${this.profile.firstname}_${this.profile.lastname}.pdf`);

        resolve();
      }catch(exception){ reject(exception); }
    });

    return promise;
  }

  public get profile() :Profile {
    return this.profileSvc.profile ? this.profileSvc.profile : {};
  }

}
