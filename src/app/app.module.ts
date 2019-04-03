import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SelectComponentComponent } from './components/shared/select-component/select-component.component';
import { InputComponentComponent } from './components/shared/input-component/input-component.component';
import { SubmitComponentComponent } from './components/shared/submit-component/submit-component.component';
import { LearningFormComponent } from './components/learning-form/learning-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { QueryService } from './query.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PipeService } from './pipe.service';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SelectComponentComponent,
    InputComponentComponent,
    SubmitComponentComponent,
    LearningFormComponent,
    NotFoundComponent,
    ReactiveFormComponent,
    RegisterFormComponent,
 
    

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
   
   

  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
