import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, authLoading, userLogOut } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (authLoading || isSellerLoading) {
    return <LoadingCircle />;
  }
  if (!user?.uid || !isSeller) {
    userLogOut();
    toast.error("You are not a seller!");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default SellerRoute;
