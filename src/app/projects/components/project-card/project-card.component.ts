import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

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

  constructor() {}

  onRedirect(url: string): void {
    window.open(url, '_blank');
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
