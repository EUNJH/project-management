import { useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

interface AuthModalProps {
  onClose: () => void;
  onSuccess: () => void;
  moveSignup: () => void;
  isOpen: boolean;
  type: "login" | "signup";
}

export default function AuthModal({
  onClose,
  onSuccess,
  moveSignup,
  isOpen,
  type,
}: AuthModalProps) {
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
      <DialogTitle></DialogTitle>
      <DialogContent className="sm:max-w-md border-border bg-background">
        {type === "login" ? (
          <LoginForm onSuccess={onSuccess} moveSignup={moveSignup} />
        ) : (
          <SignUpForm onSuccess={onSuccess} />
        )}
      </DialogContent>
    </Dialog>
  );
}
