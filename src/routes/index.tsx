import Layout from "@/components/layout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import { Kanban } from "lucide-react";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  // TODO : Login과 같이 Layout 필요없는 페이지를 위한 URL 재구성
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/auth",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        children: [
          { index: true, element: <Dashboard /> },
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
