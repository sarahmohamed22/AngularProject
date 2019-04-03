import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validator,Validators} from '@angular/forms' ;
import { Pipe,  PipeTransform} from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    pwd: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required])
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }
  

  ngOnInit() {
  }
  
  alertRegisterForm():void{
    alert("You loggedin successfully!");
    }
}