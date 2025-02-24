import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from '../pages/pages-routing.module';
import { ButtonComponent } from './button/button.component';
import { LogotypeComponent } from './logotype/logotype.component';

export const SHARED_COMPONENTS = [LogotypeComponent, ButtonComponent];

@NgModule({
  declarations: SHARED_COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],
  exports: SHARED_COMPONENTS,
  providers: [],
})
export class ComponentsModule {}
