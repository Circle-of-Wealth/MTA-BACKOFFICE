import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import React, { ChangeEvent, useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import { FormEvent } from "react";

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

export function RegisterForm({}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const nav = useNavigate();

  const { register } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.name === "Email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "Password") {
      setPassword(e.target.value);
    }

    if (e.target.name === "Name") {
      setName(e.target.value);
    }
  };

  const submission = async (e: FormEvent) => {
    // Submission Logic for creating users.
    e.preventDefault();

    const userData = { email, password, options: { data: { name } } };
    const { data, error } = await register(userData);
    console.log(userData);

    if (error) {
      console.log(error);
      setError(true);
    } else {
      console.log(data);
      setEmail("");
      setPassword("");
      nav("/");
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <div className="flex justify-center">
          <img className="w-40" src={logo} alt="Maxtax Logo" />
        </div>
        <CardTitle className="text-2xl">Create Your Account</CardTitle>
        <CardDescription>
          Enter your email below to create to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={submission}>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="Name"
            type="text"
            className={`${error && "border-red-600"}`}
            placeholder="Name"
            required
            value={name}
            onChange={handleChange}
          />
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
            {error && <p className="text-red-600">Account already exists</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-600"
          >
            Create Account
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?
          <Link to="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
