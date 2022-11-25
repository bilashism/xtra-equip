import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main/Main";
import Category from "../pages/Category/Category";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { APP_SERVER } from "../utilities/utilities";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/categories/:id",
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${APP_SERVER}/categories/${params.id}`)
      },

      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ],
    errorElement: <NotFound />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )
      }
    ],
    errorElement: <NotFound />
  }
]);
