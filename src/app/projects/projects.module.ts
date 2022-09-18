import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectListComponent, ProjectDetailComponent],
  imports: [SharedModule, ProjectsRoutingModule]
})
export class ProjectsModule {}
