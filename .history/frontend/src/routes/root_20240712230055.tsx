import React from 'react'
import { LoginForm } from "@/components/login-form";

export default function Root(): React.FC<React.PropsWithChildren<{}>> {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
    <div className="w-full h-screen flex items-center justify-center theme-zinc">
      <LoginForm />
    </div>
  </div>
  )
}
