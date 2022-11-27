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

const MyProducts = () => {
  const [showProductConfirmationModal, setShowProductConfirmationModal] =
    useState(false);
  const [productData, setProductData] = useState();

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
          />
        ))}
      </div>
      <UserConfirmationModal
        showUserConfirmationModal={showProductConfirmationModal}
        setShowUserConfirmationModal={setShowProductConfirmationModal}
        userData={productData}
        userHandler={handleProductDelete}
      />
    </div>
  );
};

export default MyProducts;
