import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../../home/interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project?: Project;

  modalState = {
    isVisble: false,
    title: '',
    screenshot: '',
    isSourceCodeAvailable: false,
    sourceCodeUrl: '',
    hasLiveDemo: false,
    liveDemoUrl: ''
  };

  constructor(private router: Router) {}

  onRedirect(url: string): void {
    window.open(url, '_blank');
  }

  onLearnMore(project: Project): void {
    this.router.navigateByUrl(`/projects/q?id=${project.title.toLowerCase()}`);
  }

  onOpenModal(project: Project) {
    this.modalState = {
      isVisble: true,
      title: `${project.title} developed by Anh Tung Bui`,
      screenshot: project.screenshot,
      isSourceCodeAvailable: project.isSourceCodeAvailable ? project.isSourceCodeAvailable : false,
      sourceCodeUrl: project.sourceCodeUrl ? project.sourceCodeUrl : '',
      hasLiveDemo: project.hasLiveDemo ? project.hasLiveDemo : false,
      liveDemoUrl: project.liveDemoUrl ? project.liveDemoUrl : ''
    };
  }

  handleCancel() {
    this.modalState.isVisble = false;
  }
}
