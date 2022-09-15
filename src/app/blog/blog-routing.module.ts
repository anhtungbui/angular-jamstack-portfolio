import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { AuthorComponent } from './components/author/author.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: 'articles', component: ArticleListComponent },
      { path: 'author', component: AuthorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
