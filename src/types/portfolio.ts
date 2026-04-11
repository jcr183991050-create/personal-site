export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export type ProjectList = Project[];