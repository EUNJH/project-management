import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const { user } = useAuthStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
