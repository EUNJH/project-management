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
}

export type ProjectStatus = "active" | "completed" | "pending";
export type ViewMode = "grid" | "list";
export type SortBy = "latest" | "oldest" | "name";
