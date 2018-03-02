import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    TextComponent, 
    ButtonComponent, 
    ImageComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    TextComponent,
    ImageComponent,
    ButtonComponent,

    FormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModuleModule { }
