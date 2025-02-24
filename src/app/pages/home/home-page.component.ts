import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  constructor() {}

  handleClickEvent(event: string) {
    switch (event) {
        case 'download-apk':
          /// TODO: add service
            console.log('downloading apk');
            break;
        case 'contact-us':
          /// TODO: add service
            console.log('sending email');
            break;
        default:
            console.log('default');
            break;
    }
  }
}
