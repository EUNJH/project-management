import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface NewProjectFormProps {
  onSubmit: (data: { title: string; description: string }) => void;
  trigger: React.ReactNode;
}

export default function NewProjectForm({
  onSubmit,
  trigger,
}: NewProjectFormProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle("");
    setDescription("");
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-[400px] p-4" align="start">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div>
              <h3 className="font-medium mb-3">Create New Project</h3>
              <div className="grid gap-2">
                <label htmlFor="title" className="text-sm">
                  Project Title
                </label>
                <Input
                  id="title"
                  placeholder="Enter project title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Enter project description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={!title.trim()}>
                Create Project
              </Button>
            </div>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
