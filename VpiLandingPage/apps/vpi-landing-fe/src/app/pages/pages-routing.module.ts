import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pagesRoutes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home-page.module').then((m) => m.HomePageModule),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
