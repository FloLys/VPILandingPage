import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module';
import { PagesRoutingModule } from '../pages-routing.module';
import { PageWrapperComponent } from './page-wrapper.component';

@NgModule({
  declarations: [PageWrapperComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule, PagesRoutingModule],
  exports: [PageWrapperComponent],
})
export class PageWrapperModule {}
