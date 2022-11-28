import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import { APP_SERVER } from "../../../utilities/utilities";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);
const Payment = () => {
  const urlLocation = useLocation();
  const productId = urlLocation.pathname.split("/").pop();

  useTitle("Payment");

  const { user } = useContext(AuthContext);
  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["payment", productId],
    queryFn: async () => {
      const response = await axios(`${APP_SERVER}/payment/${productId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
      const data = await response.data;
      return data;
    }
  });

  if (isLoading) {
    return <LoadingCircle />;
  }
  const {
    _id,
    category,
    image,
    isAdvertised,
    isSold,
    location,
    isBooked,
    postedOn,
    productName,
    description,
    sellingPrice
  } = product;

  return (
    <div>
      <div className="">
        <h2 className="text-2xl mb-8">
          Payment for{" "}
          <b className="text-green-600 capitalize">{product?.productName}</b>
        </h2>

        <div className="grid gap-8 xl:grid-cols-2">
          <main className="max-w-lg">
            <div className="max-w-full shadow">
              <div>
                <img src={image} className="w-full h-44 object-cover" />
              </div>
              <div className="bg-white">
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold capitalize">
                      {productName}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 overflow-hidden  text-ellipsis ">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                        {category.split(" ").shift()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">
                      {location}
                    </h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">
                      ${sellingPrice}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <aside className="">
            <Elements stripe={stripePromise}>
              <CheckoutForm product={product} />
            </Elements>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Payment;
