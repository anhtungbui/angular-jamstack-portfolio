import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    title: 'Anh Tung Bui - Web Developer'
  },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  //   title: 'Blog - Anh Tung Bui'
  // }
  /* FIXME: */
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
