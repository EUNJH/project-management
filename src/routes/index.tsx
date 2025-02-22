import Layout from "@/components/layout";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import { Kanban } from "lucide-react";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import LandingPage from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/projects",
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
