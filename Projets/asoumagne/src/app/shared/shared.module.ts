import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { TitleComponent } from './components/title/title.component';
import { JoinPipe } from './pipes/join.pipe';
import { ProgressComponent } from './components/progress/progress.component'

import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { PdfService } from './services/pdf.service';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TrustPipe } from './pipes/trust.pipe';
import { InputfileComponent } from './components/inputfile/inputfile.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    Ng2PageScrollModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    JoinPipe, 
    TitleComponent, 
    ProgressComponent, 
    FooterComponent, 
    TrustPipe, 
    InputfileComponent
  ],
  exports: [
    TitleComponent,
    FooterComponent,
    InputfileComponent,
    HttpClientModule,
    JoinPipe,
    ProgressComponent,
    Ng2PageScrollModule,
    FormsModule,
    RouterModule,
    TrustPipe,
  ],
  providers: []
})
export class SharedModule { }
