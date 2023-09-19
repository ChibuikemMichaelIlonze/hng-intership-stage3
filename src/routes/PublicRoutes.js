import { useAuth } from "@/app/hooks/useAuth";
import Home from "@/app/page";
import React from "react";

const PublicRoutes = ({children}) => {
  const { user } = useAuth();
  if (user) {
    return <Home/>;
  }
  return children
};

export default PublicRoutes;
