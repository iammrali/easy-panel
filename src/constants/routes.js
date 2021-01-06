import { Navigate } from "react-router-dom";
import EmptyLayout from "../components/layouts/EmptyLayout";
import MainLayout from "../components/layouts/MainLayout";
import DashboardView from "../views/DashboardView";

export const LOGIN_URL = "/app/login";

const ROUTES = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/dashboard", element: <DashboardView /> },
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "*", element: <Navigate to="/app/404" /> },
    ],
  },
  {
    path: "/app",
    element: <EmptyLayout />,
    children: [
      //   { path: "login", element: <LoginView /> },
      //   { path: "404", element: <NotFoundView /> },
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "*", element: <Navigate to="/app/404" /> },
    ],
  },
];

export default ROUTES;
