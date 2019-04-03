import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/hero';
import { HttpClient } from '@angular/common/http';
import { QueryService } from 'src/app/query.service';

@Component({
  selector: 'app-learning-form',
  templateUrl: './learning-form.component.html',
  styleUrls: ['./learning-form.component.scss']
})
export class LearningFormComponent implements OnInit {
  public formData: UserData = {
    name: ' ',
    age: 0
  };


  constructor(private myService: QueryService) {
  }

  onSubmit(userForm) {
    this.myService.get(userForm);
  }


  ngOnInit() {
  }

}
