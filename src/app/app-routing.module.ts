import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { ProductComponent } from './components/product/product.component';
import {CartComponent } from './components/cart/cart.component';
import {DetailsComponent } from './components/details/details.component';
const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'loginf',component:ReactiveFormComponent},
  {path:'registerf',component:RegisterFormComponent},
  {path:'products',component:ProductComponent },
  {path:'cart',component:CartComponent },
  {path:'details',component:DetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
