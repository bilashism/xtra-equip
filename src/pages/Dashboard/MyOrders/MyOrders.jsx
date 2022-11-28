import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import { APP_SERVER } from "../../../utilities/utilities";

const MyOrders = () => {
  useTitle("My Orders");

  const { user } = useContext(AuthContext);
  const { data: orderedProducts = [], isLoading } = useQuery({
    queryKey: ["products", "booked", user?.email],
    queryFn: async () => {
      const response = await axios(
        `${APP_SERVER}/products/booked?email=${user?.email}`,
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

  return (
    <div>
      <h2 className="mb-8">My Orders {orderedProducts.length} </h2>

      <div className="grid xl:grid-cols-3 gap-8">
        {orderedProducts.map(product => (
          <div key={product?._id} product={product} className="shadow-md p-4">
            <figure className="">
              <img
                src={product?.image}
                alt={product?.productName}
                className="mx-auto w-80 h-80 object-cover shadow rounded-md"
                width={320}
                height={320}
              />
            </figure>
            <article className="">
              <h2 className="text-2xl capitalize my-3">
                {product?.productName}
              </h2>
              <p className="flex items-center gap-4 flex-wrap justify-between">
                <span className="font-bold text-indigo-500">
                  ${product?.sellingPrice}
                </span>
                <Link
                  to={`/payment/${product?._id}`}
                  disabled={!!product?.isPaid}
                  className="bg-green-400 px-4 py-1 rounded">
                  {!!product?.isPaid ? "Paid" : "Pay now"}
                </Link>
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
