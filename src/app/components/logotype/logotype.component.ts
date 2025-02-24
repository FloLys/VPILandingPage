import { Component, Input } from '@angular/core';

@Component({
  selector: 'logotype',
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.scss'],
})
export class LogotypeComponent {
  @Input() size: string = 'medium';
}
