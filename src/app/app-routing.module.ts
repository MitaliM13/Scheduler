import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SchedulingFormComponent } from './scheduling-form/scheduling-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'scheduling-form', component: SchedulingFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
