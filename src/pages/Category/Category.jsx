import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigation } from "react-router-dom";
import LoadingCircle from "../../components/ui/LoadingCircle";
import Modal from "../../components/ui/Modal";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { APP_SERVER } from "../../utilities/utilities";
import CategoryProductCard from "./CategoryProductCard";

const Category = () => {
  // const navigation = useNavigation();
  // const products = useLoaderData();
  const { user } = useContext(AuthContext);

  const location = useLocation();

  const categoryId = location?.pathname?.split("/").pop();

  const { data: bdDistrictNames = [] } = useQuery({
    queryKey: ["bd", "districtNames"],
    queryFn: async () => {
      const response = await axios(`${APP_SERVER}/bd/districtNames`);
      const data = await response.data;
      return data;
    }
  });

  const {
    register,
    formState,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit
  } = useForm();

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

  // for booking modal
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingProductData, setBookingProductData] = useState();

  const handleBookingModal = product => {
    setShowBookingModal(true);
    setBookingProductData(product);
  };

  const handleBookingProduct = data => {
    const productId = bookingProductData._id;
    const bookedInfo = {
      isBooked: true,
      ...data
    };

    axios
      .put(`${APP_SERVER}/products/${productId}`, bookedInfo, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then(data => {
        if (data.data.modifiedCount) {
          refetch();
          toast.success("Item booked successfully!");
          setShowBookingModal(false);
        }
      })
      .catch(err => {
        toast.error("Something went wrong!");
        console.error(err);
      });
  };

  const [showReportedModal, setShowReportedModal] = useState(false);
  const [reportedProductData, setReportedProductData] = useState();

  const handleReportedModal = product => {
    setShowReportedModal(true);
    setReportedProductData(product);
  };

  const handleReportedProduct = product => {
    axios
      .put(
        `${APP_SERVER}/products/${product._id}`,
        {
          isReported: true
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      )
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
        <h2 className="mb-8 text-center text-2xl">
          {products?.length ? (
            <>
              Category{" "}
              <span className="text-indigo-600 capitalize">
                {products[0]?.category?.split(" ").shift()}
              </span>
            </>
          ) : (
            <>
              No product available for now.
              <br />
              <br />
              Please check back later or browse other categories.
            </>
          )}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map(product => (
            <CategoryProductCard
              key={product?._id}
              product={product}
              handleReportedModal={handleReportedModal}
              handleBookingModal={handleBookingModal}
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

        {/* booking modal  */}

        <Modal
          showModal={showBookingModal}
          setShowModal={setShowBookingModal}
          successHandler={handleBookingProduct}>
          <div className="bg-white border border-gray-300 xl:w-2/6 w-full relative z-30 xl:px-8 px-4 py-10 grid items-center justify-center overflow-auto h-5/6">
            <div className="">
              <h2 className="text-center text-2xl mb-6">
                Booking{" "}
                <b className="text-green-600 capitalize">
                  {bookingProductData?.productName}
                </b>
              </h2>

              <form
                onSubmit={handleSubmit(handleBookingProduct)}
                className="grid gap-4 capitalize ">
                <div className="flex gap-8 flex-wrap">
                  <div className="relative mb-6 flex-grow group">
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      defaultValue={bookingProductData?.productName}
                      disabled
                      readOnly
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  cursor-not-allowed  focus:outline-none focus:ring-0 focus:border-blue-600 capitalize peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="productName"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      product name
                    </label>
                  </div>

                  <div className="relative z-0 mb-6 flex-grow max-w-xs group">
                    <input
                      type="number"
                      name="sellingPrice"
                      id="sellingPrice"
                      defaultValue={bookingProductData?.sellingPrice}
                      disabled
                      readOnly
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none cursor-not-allowed focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="sellingPrice"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Price
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="buyerName"
                      id="buyerName"
                      defaultValue={user?.displayName}
                      disabled
                      readOnly
                      className="block capitalize cursor-not-allowed py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      {...register("buyerName", {
                        value: user?.displayName
                      })}
                    />
                    <label
                      htmlFor="buyerName"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      name
                    </label>
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="email"
                      name="buyerEmail"
                      id="buyerEmail"
                      defaultValue={user?.email}
                      disabled
                      readOnly
                      className="block cursor-not-allowed py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      {...register("buyerEmail", {
                        value: user?.email
                      })}
                    />
                    <label
                      htmlFor="buyerEmail"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      email
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="tel"
                      name="buyerPhone"
                      id="buyerPhone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      {...register("buyerPhone", {
                        required: "please add your phone number",
                        minLength: {
                          value: 10,
                          message: "Must have 10 digits or more"
                        }
                      })}
                    />
                    <label
                      htmlFor="buyerPhone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Phone number
                    </label>
                    {errors.buyerPhone && (
                      <p
                        role="alert"
                        className="lowercase first-letter:capitalize text-red-600 mt-2">
                        {errors.buyerPhone?.message}
                      </p>
                    )}
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <select
                      {...register("meetingLocation", {
                        required: "please add meeting location"
                      })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 capitalize">
                      <option value="">Select meeting location</option>
                      <optgroup label="Bangladesh">
                        {bdDistrictNames.map((name, i) => (
                          <option key={`district-${i + 1}`} value={name}>
                            {name}
                          </option>
                        ))}
                      </optgroup>
                      <option value="others">others</option>
                    </select>
                    {errors.meetingLocation && (
                      <p
                        role="alert"
                        className="lowercase first-letter:capitalize text-red-600 mt-2">
                        {errors.meetingLocation?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-8 mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                    Confirm booking
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                    onClick={() => setShowBookingModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Category;
