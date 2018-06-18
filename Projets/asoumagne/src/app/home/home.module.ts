import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [HomeComponent, MenuComponent, ProfileComponent, SkillsComponent, ExperiencesComponent, EducationComponent, PortfolioComponent, HobbiesComponent],
  providers: []
})
export class HomeModule { }
