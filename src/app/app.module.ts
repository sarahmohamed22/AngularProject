import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponentComponent } from './components/shared/select-component/select-component.component';
import { InputComponentComponent } from './components/shared/input-component/input-component.component';
import { SubmitComponentComponent } from './components/shared/submit-component/submit-component.component';
import { HttpClientModule } from '@angular/common/http';
import { QueryService } from './query.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeService } from './pipe.service';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//import { CartComponent } from './components/shopping-cart/cart/cart.component';

import { ProductComponent } from './components/product/product.component';
import {CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponentComponent,
    InputComponentComponent,
    SubmitComponentComponent,
    ReactiveFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CartComponent,
    ProductComponent,
    DetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
   
   

  ],
  providers: [QueryService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
