import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import { APP_SERVER } from "../../../utilities/utilities";
import useSeller from "../../../hooks/useSeller";
import useToken from "../../../hooks/useToken";
import ProductCard from "./ProductCard";
import UserConfirmationModal from "../../../components/ui/UserConfirmationModal";
import toast from "react-hot-toast";
import Modal from "../../../components/ui/Modal";
import { FcAdvertising } from "react-icons/fc";
const MyProducts = () => {
  const [showProductConfirmationModal, setShowProductConfirmationModal] =
    useState(false);
  const [productData, setProductData] = useState();

  const [showAdModal, setShowAdModal] = useState(false);
  const [adProductData, setAdProductData] = useState();

  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    isLoading,
    refetch
  } = useQuery({
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

  const handleModal = user => {
    setShowProductConfirmationModal(true);
    setProductData(user);
  };

  const handleAdModal = product => {
    setShowAdModal(true);
    setAdProductData(product);
  };

  const handleAdCampaign = product => {
    const productId = product?._id;
    axios
      .put(
        `${APP_SERVER}/products/advertisement/${productId}?email=${user?.email}`,
        "",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      )
      .then(data => {
        if (data?.modifiedCount) {
          toast.success("Campaign is running now!");
        }
      })
      .catch(err => {
        toast.error("Campaign setup incomplete. Please try again!");
        console.error(err);
      })
      .finally(() => {
        refetch();
        setShowAdModal(false);
      });
  };

  const handleProductDelete = id => {
    fetch(`${APP_SERVER}/products/${id}?email=${user?.email}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data?.deletedCount >= 1) {
          toast.success(`Deleted successfully!`);
          refetch();
          setShowProductConfirmationModal(false);
        }
      })
      .catch(err => {
        toast.error(`Something went wrong!`);
        console.error(err);
      });
  };

  // console.log(products);

  return (
    <div>
      <h2 className="mb-8">My Products</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            handleModal={handleModal}
            handleAdModal={handleAdModal}
          />
        ))}
      </div>
      <UserConfirmationModal
        showUserConfirmationModal={showProductConfirmationModal}
        setShowUserConfirmationModal={setShowProductConfirmationModal}
        userData={productData}
        userHandler={handleProductDelete}
      />

      <Modal
        showModal={showAdModal}
        setShowModal={setShowAdModal}
        successHandler={handleAdCampaign}>
        <div className="bg-white border border-gray-300 xl:w-2/6 w-full relative z-30 xl:px-14 lg:px-28 md:px-16 px-4 py-10 grid items-center justify-center overflow-auto h-5/6">
          <div className="w-full">
            <FcAdvertising className="w-20 h-20 mx-auto" />
          </div>
          <div className=" text-center">
            <div className="flex gap-4 items-center flex-wrap justify-center">
              <h2 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 mt-3">
                Advertise for{" "}
                <span className="text-green-600 capitalize">
                  {adProductData?.productName}
                </span>
                ?
              </h2>

              <figure className="text-center">
                <picture className="">
                  <img
                    src={adProductData?.image}
                    alt={adProductData?.productName}
                    className="w-64 h-64 object-cover mx-auto shadow"
                    width="256"
                    height="256"
                    decoding="async"
                    fetchpriority="low"
                    loading="lazy"
                  />
                </picture>
              </figure>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              role="button"
              onClick={() => handleAdCampaign(adProductData)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
              Start now
            </button>

            <button
              role="button"
              aria-label="no thanks"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
              onClick={() => setShowAdModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyProducts;
