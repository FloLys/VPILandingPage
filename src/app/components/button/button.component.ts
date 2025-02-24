import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vpi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() size: string = 'medium';
  @Input() color: string = 'primary';
  @Input() eventName: string = '';
  @Output() clickButton = new EventEmitter<string>();

  constructor() {}

  handleEvent() {
    this.clickButton.emit(this.eventName);
  }
}
