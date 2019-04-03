import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) {

  }




  get(userForm) {
    if (userForm.valid) {
      this.http.get('https://jsonplaceholder.typicode.com/posts', userForm.value).subscribe(res => {
        console.log(res)
      });
    }
  }

  post(userForm) {
    if (userForm.valid) {
      this.http.post('https://jsonplaceholder.typicode.com/posts', userForm.value).subscribe(res => {
        console.log(res)
      });
    }
  }


/*   onSubmit(userForm) {
    if (userForm.valid) {
      this.http.post('https://jsonplaceholder.typicode.com/posts', userForm.value).subscribe(res => {
        console.log(res)
      });
    }
  } */
}
