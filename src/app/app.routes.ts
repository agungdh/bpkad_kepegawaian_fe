import { Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './page/auth/login/login.component';

export const routes: Routes = [
    {path: 'dashboard', component: DefaultComponent},
    {path: 'dashboard2', component: DefaultComponent},
    {path: 'login', component: LoginComponent},
];
