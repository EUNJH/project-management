import { ProjectStatus } from "@/types/project";
import { Badge } from "@/components/ui/badge";

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const statusColors = {
    active: "bg-green-100 text-green-800 hover:bg-green-100",
    complete: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    archived: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  };

  return <Badge className={statusColors[status]}>{status}</Badge>;
}
