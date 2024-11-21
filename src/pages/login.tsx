import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/contexts/AuthProvider";
import { useEffect } from "react";

export default function LoginPage() {
  const { setUser } = useAuth();

  useEffect(() => {}, []);

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </div>
  );
}
