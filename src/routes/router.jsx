import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main/Main";
import Blogs from "../pages/Blogs/Blogs";
import Category from "../pages/Category/Category";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers";
import MyBuyers from "../pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../pages/Dashboard/ReportedItems/ReportedItems";
import Settings from "../pages/Dashboard/Settings/Settings";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { APP_SERVER } from "../utilities/utilities";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

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
        )
      },

      {
        path: "/login",
        element: <Login />
      },
      ,
      {
        path: "/blogs",
        element: <Blogs />
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Settings />
      },
      ,
      {
        path: "/dashboard/settings",
        element: <Settings />
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        )
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        )
      },
      {
        path: "/dashboard/reportedItems",
        element: (
          <AdminRoute>
            <ReportedItems />
          </AdminRoute>
        )
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        )
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        )
      },
      {
        path: "/dashboard/myBuyers",
        element: (
          <SellerRoute>
            <MyBuyers />
          </SellerRoute>
        )
      },
      {
        path: "/dashboard/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
        )
      }
    ],
    errorElement: <NotFound />
  }
]);
