import React from "react";
import { LoginForm } from "@/components/auth/login-form";

export const Login: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="w-full h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};
