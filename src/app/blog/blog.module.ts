import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { AuthorComponent } from './components/author/author.component';

@NgModule({
  declarations: [BlogComponent, BlogHeaderComponent, ArticleListComponent, AuthorComponent],
  imports: [SharedModule, BlogRoutingModule]
})
export class BlogModule {}
