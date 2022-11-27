import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigation } from "react-router-dom";
import LoadingCircle from "../../components/ui/LoadingCircle";
import Modal from "../../components/ui/Modal";
import { APP_SERVER } from "../../utilities/utilities";
import CategoryProductCard from "./CategoryProductCard";

const Category = () => {
  // const navigation = useNavigation();
  // const products = useLoaderData();
  const location = useLocation();

  const categoryId = location?.pathname?.split("/").pop();

  const {
    data: products = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["categories", categoryId],
    queryFn: async () => {
      const response = await axios(`${APP_SERVER}/categories/${categoryId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
      const data = await response.data;
      return data;
    }
  });

  // const [showBookingModal, setShowBookingModal] = useState(false);
  // const [reportedProductData, setReportedProductData] = useState();

  const [showReportedModal, setShowReportedModal] = useState(false);
  const [reportedProductData, setReportedProductData] = useState();

  const handleReportedModal = product => {
    setShowReportedModal(true);
    setReportedProductData(product);
  };

  const handleReportedProduct = product => {
    axios
      .put(`${APP_SERVER}/products/${product._id}`, "", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then(data => {
        if (data.data.modifiedCount) {
          refetch();
          toast.success("Item reported successfully!");
          setShowReportedModal(false);
        }
      })
      .catch(err => {
        toast.error("Something went wrong!");
        console.error(err);
      });
  };

  if (isLoading) {
    return <LoadingCircle />;
  }
  // console.log(products);

  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="mb-8">
          Category{" "}
          <span className="text-indigo-600 capitalize">
            {products[0]?.category?.split(" ").shift()}
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map(product => (
            <CategoryProductCard
              key={product?._id}
              product={product}
              handleReportedModal={handleReportedModal}
            />
          ))}
        </div>

        <Modal
          showModal={showReportedModal}
          setShowModal={setShowReportedModal}
          successHandler={handleReportedProduct}>
          <div className="bg-white border border-gray-300 xl:w-2/6 w-full relative z-30 xl:px-14 lg:px-28 md:px-16 px-4 py-10 grid items-center justify-center overflow-auto h-5/6">
            <div className=" text-center">
              <div className="flex gap-4 items-center flex-wrap justify-center">
                <h2 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 mt-3">
                  Report{" "}
                  <span className="text-yellow-600 capitalize">
                    {reportedProductData?.productName}
                  </span>
                  ?
                </h2>

                <figure className="text-center">
                  <picture className="">
                    <img
                      src={reportedProductData?.image}
                      alt={reportedProductData?.productName}
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
                type="button"
                onClick={() => handleReportedProduct(reportedProductData)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300">
                Send report
              </button>

              <button
                role="button"
                type="button"
                aria-label="no thanks"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                onClick={() => setShowReportedModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Category;
