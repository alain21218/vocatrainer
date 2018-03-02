import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavSearchComponent } from './nav-search/nav-search.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NavbarComponent, 
    NavItemComponent, 
    NavSearchComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavigationModuleModule { }
