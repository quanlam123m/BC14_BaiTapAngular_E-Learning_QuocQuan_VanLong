import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./page/home-template/home-template.module').then(
  //       (m) => m.HomeTemplateModule
  //     ),
  // },
  {
    path: 'admin',
    loadChildren: () =>
      import('./page/admin-template/admin-template.module').then(
        (m) => m.AdminTemplateModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./page/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
