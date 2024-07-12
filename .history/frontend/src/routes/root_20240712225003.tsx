import React from 'react'

import { LoginForm } from "@/components/login-form";

export default App;

export default function Root() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
    <div className="w-full h-screen flex items-center justify-center theme-zinc">
      <LoginForm />
    </div>
  </div>
  )
}
