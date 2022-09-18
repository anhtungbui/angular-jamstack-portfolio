import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectCardComponent
  ],
  imports: [SharedModule, ProjectsRoutingModule, NzCardModule, NzTagModule, NzModalModule]
})
export class ProjectsModule {}
