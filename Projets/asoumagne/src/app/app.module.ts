import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ProfileService } from './shared/services/profile.service';
import { PdfService } from './shared/services/pdf.service';
import { routing } from './routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const dateLocale = { provide: LOCALE_ID, useValue: "fr" };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AdminModule,
    LoginModule,
    SharedModule,
    routing,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
  ],
  providers: [
    ProfileService,
    PdfService,
    dateLocale,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
