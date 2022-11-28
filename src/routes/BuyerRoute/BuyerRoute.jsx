import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, authLoading, userLogOut } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (authLoading || isBuyerLoading) {
    return <LoadingCircle />;
  }
  if (!user?.uid || !isBuyer) {
    userLogOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default BuyerRoute;
