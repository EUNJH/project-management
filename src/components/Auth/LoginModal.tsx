import { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";

interface LoginModalProps {
  onClose: () => void;
  onSuccess: () => void;
  isOpen: boolean;
}

export default function LoginModal({
  onClose,
  onSuccess,
  isOpen,
}: LoginModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (isOpen) {
        document.addEventListener("keydown", handleEsc);
      }
      //NOTE: onClose가 실행된 후 isOpen이 false가 되면 handleEsc가 실행되지 않도록 Cleanup 해야함
      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    };
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md border-border bg-background">
        <LoginForm onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
}
