import { supabase } from "@/lib/supabase/supabase";
import { useAuthStore } from "@/store/authStore";
import { Project, ProjectStatus } from "@/types/project";

interface ProjectResponse {
  projects: Project[];
  error: string | null;
}
interface ApiProjectResponse {
  role: string;
  projects: {
    id: string;
    title: string;
    description: string;
    status: ProjectStatus;
    created_at: string;
    modified_at: string;
  }[];
}

export async function getProjects(userId?: string): Promise<ProjectResponse> {
  const targetUserId = userId || useAuthStore.getState().user?.id;

  if (!targetUserId) {
    return { projects: [], error: "User ID is required" };
  }

  try {
    const { data: memberProjects, error: projectError } = await supabase
      .from("project_members")
      .select(
        `
        role,
        projects:project_id (
          id,
          title,
          description,
          status,
          created_at,
          modified_at
        )
      `
      )
      .eq("member_id", targetUserId);

    if (projectError) {
      throw new Error(`Failed to fetch projects: ${projectError.message}`);
    }

    if (!memberProjects || memberProjects.length === 0) {
      return { projects: [], error: null };
    }

    const projects: Project[] = (memberProjects as ApiProjectResponse[])
      .map((item) => ({
        id: item.projects.id,
        title: item.projects.title,
        description: item.projects.description,
        status: item.projects.status,
        progress: 0,
        dueDate: "",
        members: [],
        created_at: item.projects.created_at,
        modified_at: item.projects.modified_at,
      }))
      .sort((a) => (a.status === "active" ? -1 : 1));
    console.log(projects);
    // const projectIds: string[] = projects.map((project) => project[0].id);

    return { projects, error: null };
  } catch (error) {
    console.error("Error fetching user projects:", error);
    return {
      projects: [],
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

export async function getProjectMembers() {
  return null;
}
