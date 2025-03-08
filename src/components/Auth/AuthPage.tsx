import LoginForm from "@/components/Auth/LoginForm";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from =
    (location.state as { from?: Location })?.from?.pathname ||
    "/projects/dashboard";

  const handleSuccess = () => {
    navigate(from, { replace: true });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
        onSuccess={handleSuccess}
        moveSignup={() => {}}
        isBorder={true}
      />
    </div>
  );
}
