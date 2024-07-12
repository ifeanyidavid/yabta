import { LoginForm } from "@/components/login-form";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="w-full h-screen flex items-center justify-center px-4 theme-zinc">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
