import React from "react";
import { ForgotPassword as ForgotPasswordPage } from "@/pages/ForgotPassword";

export const ForgotPassword: React.FC = () => {
  return <div className="relative flex min-h-screen flex-col bg-background">
      <div className="w-full h-screen flex items-center justify-center"></div><ForgotPasswordPage />;
};
