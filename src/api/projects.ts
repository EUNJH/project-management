import { mockProjects } from "@/data/projects";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  //TODO : supabase api 변환
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockProjects;
}
