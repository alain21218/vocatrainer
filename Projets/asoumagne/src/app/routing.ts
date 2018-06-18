import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routing = RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
]);