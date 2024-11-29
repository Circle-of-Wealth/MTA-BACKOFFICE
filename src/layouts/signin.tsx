import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useAuthActions } from "@convex-dev/auth/react";

const SignIn: React.FC = () => {
  const { signIn } = useAuthActions();

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center">
            <img
              src="/logo.png"
              alt="MaxTax Alliance"
              className="h-20 mx-auto mb-6"
            />
            <h2 className="mt-6 text-3xl font-bold text-[#002868]">Sign In</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-medium text-[#EE1C25] hover:text-[#EE1C25]/90"
              >
                Create One
              </a>
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#002868]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="border-[#002868] focus:ring-[#002868]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#002868]">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="border-[#002868] focus:ring-[#002868]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-[#002868]">
                  Remember Me
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm font-medium text-[#EE1C25] hover:text-[#EE1C25]/90"
              >
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#002868] hover:bg-[#002868]/90 text-white"
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-[#002868]/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-50 px-2 text-[#002868]/60">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={(e: any) => {
                  e.preventDefault();
                  void signIn("google");
                }}
                variant="outline"
                className="w-full border-[#002868] text-[#002868] hover:bg-[#002868]/5"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
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
                Google
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#002868] text-[#002868] hover:bg-[#002868]/5"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                </svg>
                Facebook
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            By continuing, you agree to our{" "}
            <a
              href="/terms"
              className="font-medium text-[#EE1C25] hover:text-[#EE1C25]/90"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="font-medium text-[#EE1C25] hover:text-[#EE1C25]/90"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://ideogram.ai/assets/image/lossless/response/YHBRxwDaQ4ub-w-l0sCfhQ"
          alt="People in a meeting"
        />
      </div>
    </div>
  );
};

export default SignIn;
