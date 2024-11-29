import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import GoogleLogo from "@/components/GoogleLogo";
import FacebookLogo from "@/components/FacebookLogo";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle sign up logic here
    console.log("Sign up attempted with:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up
    console.log("Google sign up attempted");
  };

  const handleFacebookSignUp = () => {
    // Handle Facebook sign up
    console.log("Facebook sign up attempted");
  };

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
            <h2 className="mt-6 text-3xl font-bold text-[#002868]">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-medium text-[#EE1C25] hover:text-[#EE1C25]/90"
              >
                Sign In
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#002868]">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-[#002868] focus:ring-[#002868]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#002868]">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-[#002868] focus:ring-[#002868]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#002868]">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-[#002868] focus:ring-[#002868]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#002868]">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="border-[#002868] focus:ring-[#002868]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#002868]">
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border-[#002868] focus:ring-[#002868]"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#002868] hover:bg-[#002868]/90 text-white"
            >
              Sign Up
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
                type="button"
                variant="outline"
                className="w-full border-[#002868] text-[#002868] hover:bg-[#002868]/5"
                onClick={handleGoogleSignUp}
              >
                <GoogleLogo className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-[#002868] text-[#002868] hover:bg-[#002868]/5"
                onClick={handleFacebookSignUp}
              >
                <FacebookLogo className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <Link
              to="/terms"
              className="font-medium text-[#EE1C25] hover:text-[#EE1C25]/90"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-medium text-[#EE1C25] hover:text-[#EE1C25]/90"
            >
              Privacy Policy
            </Link>
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

export default SignUp;
