import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, filter, map, Observable, switchMap, tap } from 'rxjs';
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  slug$: Observable<string>;
  project$: Observable<Project | undefined>;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {
    this.slug$ = route.queryParams.pipe(
      filter((params: Params) => params['id']), // { id: '123' }
      map((projectId) => projectId['id'])
      // tap(console.log),
    );

    this.project$ = combineLatest([this.slug$, this.projectService.projects$]).pipe(
      map(([slug, projects]) => {
        return projects.find((project) => project.title.toLowerCase() === slug);
      })
      // tap(console.log)
    );
  }
}
