import { Project, ViewMode } from "@/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart2, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatusButton from "./StatusBadge";

export interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
  viewMode: ViewMode;
}

export default function ProjectCard({
  project,
  onClick,
  viewMode,
}: ProjectCardProps) {
  return (
    <Card
      className={`hover:shadow-lg transition-shadow cursor-pointer ${
        viewMode === "list" ? "flex flex-row" : ""
      }`}
      onClick={() => onClick(project.id)}
    >
      {viewMode === "list" ? (
        // List View Layout
        <div className="flex flex-1 items-center p-4">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
              <StatusButton status={project.status} />
            </div>
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Due: {project.dueDate}
                </span>
              </div>
              <div className="flex-1 max-w-xs">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex -space-x-2">
                {project.members.slice(0, 3).map((member) => (
                  <Avatar key={member.id} className="border-2 border-white">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                ))}
                {project.members.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-gray-600">
                      +{project.members.length - 3}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {/* TODO: 화면 크기와 description 길이에 따른 처리 */}
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </div>
              <StatusButton status={project.status} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Due: {project.dueDate}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-center w-full">
              <div className="flex -space-x-2">
                {project.members.slice(0, 3).map((member) => (
                  <Avatar key={member.id} className="border-2 border-white">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                ))}
                {project.members.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-gray-600">
                      +{project.members.length - 3}
                    </span>
                  </div>
                )}
              </div>
              <BarChart2 className="w-5 h-5 text-gray-500" />
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
