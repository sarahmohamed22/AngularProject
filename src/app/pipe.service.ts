import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PipeService {
  
  transform(Value:string):number{
    return parseInt(Value, 10);
    }
  constructor() { }
}
