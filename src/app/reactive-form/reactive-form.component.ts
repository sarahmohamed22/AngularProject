import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validator,Validators} from '@angular/forms' ;
import { Pipe,  PipeTransform} from '@angular/core';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  date:Date =new Date();
  reactiveForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    pwd: new FormControl('',[Validators.required])
  });

  // constructor(private stream:StreamService) {
  //   this.stream.getName().subscribe(res=>console.log(res));
  //  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.reactiveForm.value);
  }
  ngOnInit() {
  }
  
  alertReactiveForm():void{
    alert("You loggedin successfully!");
    }

}
