import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../components/GoogleLogo";
import FacebookLogo from "../components/FacebookLogo";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto w-full rounded-md"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-[#002868]">
            Create Employee Account
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-[#002868]"
              >
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-[#002868] rounded-md shadow-sm placeholder-[#002868]/60 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-[#002868]"
              >
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-[#002868] rounded-md shadow-sm placeholder-[#002868]/60 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
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
              value={formData.email}
              onChange={handleChange}
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
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-[#002868] rounded-md shadow-sm placeholder-[#002868]/60 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#002868]"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-[#002868] rounded-md shadow-sm placeholder-[#002868]/60 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#002868] hover:bg-[#001845] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
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
                onClick={handleGoogleSignUp}
                className="w-full inline-flex justify-center py-2 px-4 border border-[#002868] rounded-md shadow-sm bg-white text-sm font-medium text-[#002868] hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Google</span>
                <GoogleLogo className="w-5 h-5" fill="currentColor" />
              </button>
            </div>
            <div>
              <button
                onClick={handleFacebookSignUp}
                className="w-full inline-flex justify-center py-2 px-4 border border-[#002868] rounded-md shadow-sm bg-white text-sm font-medium text-[#002868] hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Facebook</span>
                <FacebookLogo className="w-5 h-5" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-[#002868]/60">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-medium text-[#002868] hover:text-[#001845]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
