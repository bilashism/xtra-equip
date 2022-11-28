import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, authLoading, userLogOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (authLoading || isAdminLoading) {
    return <LoadingCircle />;
  }
  if (!user?.uid || !isAdmin) {
    userLogOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default AdminRoute;
