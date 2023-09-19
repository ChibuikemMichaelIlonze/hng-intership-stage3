"use client"
import { createContext, useEffect, useState } from "react";

// Create the Auth context
export const AuthContext = createContext({ user: null, isLoading: false });

// Define the AuthProvider component
export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
