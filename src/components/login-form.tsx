import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import React, { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
import { useAuth } from "@/contexts/AuthProvider";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { login } = useAuth();

  const nav = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.name === "Email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "Password") {
      setPassword(e.target.value);
    }
  };

  const submission = async (e: FormEvent) => {
    e.preventDefault();

    const { data, error } = await login({ email, password });

    if (error) {
      setError(true);
    } else {
      setEmail("");
      setPassword("");
      console.log(data);
      nav("/");
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <div className="flex justify-center">
          <img className="w-40" src={logo} alt="Maxtax Logo" />
        </div>
        <CardTitle className="text-2xl">Maxtax Employee Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={submission}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="Email"
              type="email"
              className={`${error && "border-red-600"}`}
              placeholder="Email"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                to="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              className={`${error && "border-red-600"}`}
              id="password"
              name="Password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handleChange}
            />
            {error && <p className="text-red-600">Invalid email or password</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-600"
          >
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{""}
          <Link to="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
