import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-component',
  templateUrl: './submit-component.component.html',
  styleUrls: ['./submit-component.component.scss']
})
export class SubmitComponentComponent implements OnInit {
  @Output() registerMsg: EventEmitter<any> = new EventEmitter();
  sendMsg():void {
    this.registerMsg.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
