import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LearningFormComponent } from './components/learning-form/learning-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  {path:'lf',component:LearningFormComponent},
  {path:'loginf',component:ReactiveFormComponent},
  {path:'registerf',component:RegisterFormComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
