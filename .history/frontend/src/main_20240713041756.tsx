import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/styles/global.css";
import Root from "@/routes/root";
import ErrorPage from "@/routes/error-page";
import { Dashboard as DashboardRoute } from "@/routes/dashboard";
import { Register as RegisterRoute } from "@/routes/register";
import { ForgotPassword as ForgotPasswordRoute } from "@/routes/forgot-password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/feed",
        element: <div>Feed</div>,
      },
      {
        path: "/discuss",
        element: <div>Discuss</div>,
      },
      {
        path: "/reports",
        element: <div>Reports</div>,
      },
      {
        path: "/calendars",
        element: <div>Calendars</div>,
      },
      {
        path: "/projects",
        element: <div>Projects</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
