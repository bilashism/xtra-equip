import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { APP_SERVER } from "../../../utilities/utilities";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import toast from "react-hot-toast";
import Modal from "../../../components/ui/Modal";
import { FaAt, FaUser } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";

const ReportedItems = () => {
  useTitle("Reported items");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [reportedProductData, setReportedProductData] = useState();

  const {
    data: reportedProducts = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["products", "reported"],
    queryFn: async () => {
      const response = await fetch(`${APP_SERVER}/products/reported`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
      const data = await response.json();
      return data;
    }
  });
  // console.log(reportedProducts);
  const handleModal = user => {
    setShowConfirmationModal(true);
    setReportedProductData(user);
  };

  const handleReportedItemDelete = product => {
    const productId = product?._id;
    fetch(`${APP_SERVER}/products/reported/${productId}`, {
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
          setShowConfirmationModal(false);
        }
      })
      .catch(err => {
        toast.error(`Something went wrong!`);
        console.error(err);
      });
  };

  if (isLoading) {
    return <LoadingCircle />;
  }
  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-8">
        Reported Items {reportedProducts?.length}
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {reportedProducts.map(product => (
          <div
            key={product?._id}
            className="flex flex-col items-center shadow pb-4">
            <figure className="text-center">
              <picture className="">
                <img
                  src={product?.image}
                  alt={product?.productName}
                  className="w-64 h-64 object-cover mx-auto shadow"
                  width="256"
                  height="256"
                  decoding="async"
                  fetchpriority="low"
                  loading="lazy"
                />
              </picture>
            </figure>
            <h5 className="mb-1 text-xl font-medium text-gray-900 capitalize mt-4">
              {product?.productName}
            </h5>
            <p className="text-sm flex items-center gap-4 flex-wrap pt-2">
              <span className="capitalize inline-flex items-center gap-1">
                <FaUser className="inline-flex" /> {product?.sellerName}
              </span>
              <a
                href={`mailto:${product?.sellerEmail}`}
                target="_blank"
                className="hover:underline text-blue-700 inline-flex items-center gap-1">
                <FaAt className="inline-flex" />
                {product?.sellerEmail}
              </a>
            </p>
            <div className="flex flex-wrap items-center gap-4 py-4">
              {product?.isAdvertised && (
                <span className="text-sm text-gray-500 ">Advertised</span>
              )}
              {product?.isBooked && (
                <span className="text-sm text-gray-500 ">Booked</span>
              )}
              {product?.isSold && (
                <span className="text-sm text-gray-500 ">Sold</span>
              )}
            </div>

            <div className="flex flex-grow items-end ">
              <button
                type="button"
                onClick={() => handleModal(product)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        <Modal
          showModal={showConfirmationModal}
          setShowModal={setShowConfirmationModal}
          successHandler={handleReportedItemDelete}>
          <div className="bg-white border border-gray-300 xl:w-2/6 w-full relative z-30 xl:px-14 lg:px-28 md:px-16 px-4 py-10 grid items-center justify-center overflow-auto h-5/6">
            <div className=" text-center">
              <div className="flex gap-4 items-center flex-wrap justify-center">
                <h2 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 mt-3">
                  Delete{" "}
                  <span className="text-red-600 capitalize">
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
                onClick={() => handleReportedItemDelete(reportedProductData)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                Delete item
              </button>

              <button
                role="button"
                type="button"
                aria-label="no thanks"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                onClick={() => setShowConfirmationModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ReportedItems;
