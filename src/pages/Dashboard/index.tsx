import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Grid, List, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Project, SortBy, ViewMode } from "@/types/project";
import { getProjects } from "@/api/projects";
import ProjectCardSkeleton from "@/components/projects/ProjectCardSkeleton";
import NewProjectForm from "@/components/projects/NewProjectForm";

export default function Dashboard() {
  const [sortBy, setSortBy] = useState<SortBy>("latest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLaoding, setIsLaoding] = useState<boolean>(false);

  const handleProjectClick = (id: string) => {
    console.debug(`Project ${id} clicked`);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      //TODO : error handling 공통화
      try {
        setIsLaoding(true);

        const { projects, error } = await getProjects();

        if (error) {
          throw new Error(error);
        }

        setProjects(projects);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLaoding(false);
      }
    };

    fetchProjects();
  }, []);

  //TODO : 최초 mount될때 4번 실행 -> 1번 실행으로 변경 필요
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();

        case "name":
          return a.title.localeCompare(b.title);

        case "latest":
        default:
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      }
    });
  }, [projects, sortBy]);

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <NewProjectForm
          onSubmit={(data) => {
            console.debug(data);
          }}
          trigger={
            <Button variant="outline">
              <Plus className="size-4" />
              New Project
            </Button>
          }
        />
        <div className="flex items-center gap-4">
          <Select
            value={sortBy}
            onValueChange={(value: SortBy) => setSortBy(value)}
          >
            <SelectTrigger className="w-32 border-0 shadow-none focus:ring-0">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">latest</SelectItem>
              <SelectItem value="oldest">oldest</SelectItem>
              <SelectItem value="name">name</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2 rounded-lg">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="size-2" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="size-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto"
              : "flex flex-col gap-4 max-w-screen-lg mx-auto"
          }
        >
          {isLaoding
            ? [...Array(5)].map((_, i) => (
                <ProjectCardSkeleton key={i} viewMode={viewMode} />
              ))
            : sortedProjects.map((project: Project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={handleProjectClick}
                  viewMode={viewMode}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
