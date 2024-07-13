import { useLinkClickHandler, NavLink } from "react-router-dom";
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

export function ForgotPasswordForm() {
  const navigateToDashboard = useLinkClickHandler("/dashboard");
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Forgot password?</CardTitle>
        <CardDescription>
          Don't worry! Fill in your email and we will send you a link to reset
          your password.
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
          <Button
            onClick={navigateToDashboard}
            type="submit"
            className="w-full"
          >
            Send Email
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          <NavLink to="/" className="underline">
            Back to Login
          </NavLink>
        </div>
      </CardContent>
    </Card>
  );
}
