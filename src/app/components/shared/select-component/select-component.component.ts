import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss']
})
export class SelectComponentComponent implements OnInit {
  @Input('options') options:any;
  constructor() { }

  ngOnInit() {
  }

}
