import { ChangeDetectionStrategy, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = document.documentElement.scrollTop;
    if ( scrollTop > this.lastScrollTop) {
      this.isHidden = true;
      this.isVisible = false;
    } else {
      this.isHidden = false;
      this.isVisible = true;
    }
    this.lastScrollTop = scrollTop;
  }

  onSubscribe() {
    if (this.subsForm.valid) {
      const email = this.subsForm.value.email.trim();
      const currentSubscribers = [...this.subsList.value];
      currentSubscribers.push(email);
      this.subsList.next(currentSubscribers);

      console.log('Email suscrito:', email);
      this.subsForm.reset();
      // TODO: include alert
    } else {
      console.log('Email inválido');
    }
  }
}
