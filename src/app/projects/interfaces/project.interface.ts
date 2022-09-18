import { Technology } from '../enums/technology.enum';

export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  screenshot: string;
  isSourceCodeAvailable?: boolean;
  liveDemo?: string;
}
