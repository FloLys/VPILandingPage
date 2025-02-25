import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { PageWrapperModule } from './page-wrapper/page-wrapper.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, PagesRoutingModule, PageWrapperModule],
  declarations: [],
  exports: [],
})
export class PagesModule {}
