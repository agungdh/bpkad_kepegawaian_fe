import { Routes } from '@angular/router';
import { PegawaiComponent } from './pegawai.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {path: '', component: PegawaiComponent},
  {path: 'form', component: FormComponent},
];
