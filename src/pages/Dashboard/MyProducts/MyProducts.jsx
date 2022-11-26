import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import { APP_SERVER } from "../../../utilities/utilities";
import useSeller from "../../../hooks/useSeller";
import useToken from "../../../hooks/useToken";
import ProductCard from "./ProductCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", "email", user?.email],
    queryFn: async () => {
      const response = await axios(
        `${APP_SERVER}/products?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      );
      const data = await response.data;
      return data;
    }
  });

  if (isLoading) {
    return <LoadingCircle />;
  }
  console.log(products);

  return (
    <div>
      <h2 className="mb-8">My Products</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
