import { ChangeDetectionStrategy, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PageWrapperComponent implements OnInit {
  isHidden = false;
  isVisible = false;
  lastScrollTop = 0;

  subsForm: FormGroup;
  private subsList = new BehaviorSubject<string[]>([]);
  subscribers$: Observable<string[]> = this.subsList;

  constructor(private fb: FormBuilder) {
    this.subsForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      this.isHidden = true;
      this.isVisible = false;
    } else {
      this.isHidden = false;
      this.isVisible = true;
    }
    this.lastScrollTop = scrollTop;
  }

  handleClickEvent(event: string) {
    switch (event) {
      case 'download-apk':
        /// TODO: add service
        console.log('downloading apk');
        break;
      case 'subscribe':
        /// TODO: add service
        /// Subscribe service sending notification
        break;
      default:
        console.log('default');
        break;
    }
  }

  onSubscribe() {
    if (this.subsForm.valid) {
      const email = this.subsForm.value.email.trim();
      const currentSubscribers = [...this.subsList.value];
      currentSubscribers.push(email);
      this.subsList.next(currentSubscribers);

      this.createSubscriber(email);

      console.log('Email suscrito:', email);
      this.subsForm.reset();
      // TODO: include alert
    } else {
      console.log('Email inválido');
    }
  }

  async createSubscriber(email: string) {
    const url = 'http://localhost:1337/api';

    try {
      const response = await fetch(`${url}/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { email: email } }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const jsonResponse = await response.json();
      console.log('Success:', jsonResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
