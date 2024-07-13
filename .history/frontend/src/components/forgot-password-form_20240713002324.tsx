import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { useLinkClickHandler, NavLink } from "react-router-dom";
  
  export function ForgotPasswordForm() {
    const navigateToashboard = useLinkClickHandler("/dashboard");
    return (
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <NavLink to="/forgot-password" className="ml-auto inline-block text-sm underline">Forgot your password?</NavLink>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button onClick={navigateToashboard} type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <NavLink to="/register" className="underline">Sign up</NavLink>
          </div>
        </CardContent>
      </Card>
    );
  }
  