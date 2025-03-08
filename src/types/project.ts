export interface ProjectMember {
  id: string;
  name: string;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  dueDate: string;
  members: ProjectMember[];
  created_at: string;
  modified_at: string;
}

export type ProjectStatus = "active" | "complete" | "archived";
export type ViewMode = "grid" | "list";
export type SortBy = "latest" | "oldest" | "name";
