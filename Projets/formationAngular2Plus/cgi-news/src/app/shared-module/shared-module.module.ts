import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageZoomDirective } from './image-zoom.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent, 
    ImageZoomDirective
  ],
  exports: [
    HeaderComponent,

    FormsModule,
    HttpClientModule,
    CommonModule,
    ImageZoomDirective
  ]
})
export class SharedModuleModule { }
