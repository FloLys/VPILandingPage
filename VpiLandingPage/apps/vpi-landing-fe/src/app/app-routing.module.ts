import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: PageWrapperComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: '**', redirectTo: '' },
  // TODO: add 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
