import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import { Kanban } from "lucide-react";
import NotFound from "@/pages/NotFound";
import LandingPage from "@/pages";
import ProtectedRoute from "@/routes/ProtectedRoute";
import Layout from "@/components/layout";
import AuthPage from "@/components/Auth/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <AuthPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/projects",
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "kanban", element: <Kanban /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
