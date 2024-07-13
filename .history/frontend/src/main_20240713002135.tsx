import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/styles/global.css";
import Root from "@/routes/root";
import ErrorPage from "@/routes/error-page";
import { Dashboard as DashboardRoute } from "@/routes/dashboard";
import { Register as RegisterRoute } from "@/routes/register";
import { ForgotPassword as Forgot } from "@/routes/forgot-password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
