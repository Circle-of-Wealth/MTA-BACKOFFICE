import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

/* Supabase configurations */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const login = async (userData: any) => {
  const { data, error } = await supabase.auth.signInWithPassword(userData);

  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error: null };
};

const register = async (userData: any) => {
  const { data, error } = await supabase.auth.signUp(userData);

  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error: null };
};

const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

// Signing out
const logOut = async () => {
  await supabase.auth.signOut();
};

/* Auth Context  */
const AuthContext = createContext<any>({
  login: () => {},
  register: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<any>({});

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);
      setSession(session);
    };

    fetchSession();
  }, []);

  return (
    <AuthContext.Provider value={{ session, login, logOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
