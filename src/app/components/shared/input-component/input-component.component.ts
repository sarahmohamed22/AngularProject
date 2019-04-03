import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent implements OnInit {
  @Input('data') data: String;
  constructor() { }

  ngOnInit() {
  }

}
export class InputComponent {
  
}