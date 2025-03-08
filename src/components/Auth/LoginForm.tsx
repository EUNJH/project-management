import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthError } from "@/types/auth";

interface LoginFormProps {
  onSuccess?: () => void;
  moveSignup: () => void;
  isBorder?: boolean;
}

export default function LoginForm({
  onSuccess,
  moveSignup,
  isBorder = false,
}: LoginFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login({ email, password });
    } catch (error) {
      if (error instanceof AuthError) {
        setError(error.message);
      }
      return;
    } finally {
      setIsLoading(false);
    }

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div
      className={`bg-background rounded-lg w-full max-w-md ${
        isBorder ? "border border-gray-400" : ""
      }`}
    >
      <div className="p-6">
        {/* 헤더 */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>

        {/* 소셜 로그인 버튼 */}
        <Button
          variant="outline"
          className="w-full mb-4 flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span>Continue with Google</span>
        </Button>

        {/* split line */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                to="/forgot-password"
                className="text-sm text-muted-foreground hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" />
            <Label htmlFor="remember-me" className="text-sm">
              Remember me
            </Label>
          </div>

          {/* 에러 메시지 */}
          {error ? (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <div></div>
          )}

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Signing in..." : "Log in"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          <span className="text-slate-600">
            Don't have an account?{" "}
            <Button
              variant="link"
              className="p-0 h-auto text-blue-600 hover:text-blue-800 hover:underline font-medium"
              onClick={moveSignup}
            >
              Sign up
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}
