import { Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';

export const routes: Routes = [
  {path: '', component: DefaultComponent, children: [
    {path: 'dashboard', loadComponent: () => import('./page/dashboard/dashboard.component').then(mod => mod.DashboardComponent)},

    {path: 'pegawai', loadChildren: () => import('./page/pegawai/routes').then(mod => mod.routes)},
  ]},
  {path: 'login', loadComponent: () => import('./page/login/login.component').then(mod => mod.LoginComponent)},
  {path: '**', loadComponent: () => import('./page/not-found/not-found.component').then(mod => mod.NotFoundComponent)},
];
