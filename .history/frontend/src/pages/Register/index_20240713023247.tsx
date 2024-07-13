import React from "react";
import { RegisterForm } from "@/components/auth/register-form";

export const Register: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="w-full h-screen flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};
