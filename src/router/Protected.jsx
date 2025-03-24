import { useAuth } from "@/context/Auth";
import React from "react";
import { Navigate } from "react-router";

const Protected = ({ children }) => {
  const { userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    return <Navigate to={"/"} replace={true} />;
  } else {
    return children;
  }
};

export default Protected;
