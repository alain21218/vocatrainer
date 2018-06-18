import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminSkillsComponent } from './admin-skills/admin-skills.component';
import { AdminExperiencesComponent } from './admin-experiences/admin-experiences.component';
import { AdminEducationComponent } from './admin-education/admin-education.component';
import { AdminPortfolioComponent } from './admin-portfolio/admin-portfolio.component';
import { AdminHobbiesComponent } from './admin-hobbies/admin-hobbies.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    AdminProfileComponent, 
    AdminSkillsComponent, 
    AdminExperiencesComponent, 
    AdminEducationComponent, 
    AdminPortfolioComponent, 
    AdminHobbiesComponent
  ]
})
export class AdminModule { }
