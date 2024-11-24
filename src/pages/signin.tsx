import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "@/components/FacebookLogo";
import GoogleLogo from "@/components/GoogleLogo";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle sign in logic here
    console.log("Sign in attempted with:", email, password);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    console.log("Google sign in attempted");
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign in
    console.log("Facebook sign in attempted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto w-full rounded-md"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-[#002868]">
            Sign In Portal
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#002868]"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-[#002868] rounded-md shadow-sm placeholder-[#002868]/60 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#002868]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-[#002868] rounded-md shadow-sm placeholder-[#002868]/60 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#002868] hover:bg-[#001845] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#002868]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#002868]/60">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="w-full inline-flex justify-center py-2 px-4 border border-[#002868] rounded-md shadow-sm bg-white text-sm font-medium text-[#002868] hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Google</span>
                <GoogleLogo className="w-5 h-5" fill="currentColor" />
              </button>
            </div>
            <div>
              <button
                onClick={handleFacebookSignIn}
                className="w-full inline-flex justify-center py-2 px-4 border border-[#002868] rounded-md shadow-sm bg-white text-sm font-medium text-[#002868] hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Facebook</span>
                <FacebookLogo className="w-5 h-5" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-[#002868]/60">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-[#002868] hover:text-[#001845]"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
