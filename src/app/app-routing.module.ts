import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    title: 'Anh Tung Bui - Web Developer'
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
    title: 'Blog - Anh Tung Bui'
  }
  // {
  //   path: 'projects',
  //   loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
  //   title: 'Projects - Anh Tung Bui'
  // }
  // FIXME:
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
