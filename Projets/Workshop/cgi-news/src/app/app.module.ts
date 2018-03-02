import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { ContentModuleModule } from './content-module/content-module.module';
import { NavigationModuleModule } from './navigation-module/navigation-module.module';
import { ServicesModuleModule } from './services-module/services-module.module';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
    ContentModuleModule,
    NavigationModuleModule,
    ServicesModuleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
