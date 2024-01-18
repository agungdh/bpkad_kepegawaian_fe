import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PegawaiComponent } from './page/pegawai/pegawai.component';
import { FormComponent as PegawaiFormComponent } from './page/pegawai/form/form.component';

export const routes: Routes = [
  {path: '', component: DefaultComponent, children: [
    {path: 'dashboard', component: DashboardComponent},

    {path: 'pegawai', component: PegawaiComponent},
    {path: 'pegawai/form', component: PegawaiFormComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];
