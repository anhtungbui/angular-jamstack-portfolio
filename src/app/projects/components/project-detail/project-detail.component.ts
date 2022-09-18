import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<Project> | undefined;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug: string = this.route.snapshot.paramMap.get('id') ?? '';

    this.project$ = this.projectService.projects$.pipe(
      map((projects) => {
        return projects.find((project) => project.title.toLowerCase() === slug);
      })
      // tap(console.log)
    ) as Observable<Project>;
  }
}
