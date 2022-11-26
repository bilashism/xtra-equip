import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    formState,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit
  } = useForm();

  // reset the form after successful submission
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const handleAddProduct = data => {
    if (!data) {
      toast.error("Please fill up the form properly and try again");
      return;
    }
    const defaultData = {
      isVerified: false,
      isSold: false,
      isAdvertised: false
    };
    console.log({ ...data, ...defaultData });
    console.log(data);
    console.log("object");
  };

  return (
    <div>
      <h2 className="mb-8">Add a Product</h2>

      <div className="">
        <form onSubmit={handleSubmit(handleAddProduct)} className="grid gap-4">
          <div className="flex gap-8 flex-wrap">
            <div className="relative z-0 mb-6 flex-grow group">
              <input
                type="text"
                name="productName"
                id="productName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("productName", {
                  required: "please add a product name"
                })}
              />
              <label
                htmlFor="productName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                product name
              </label>
              {errors.productName && (
                <p role="alert">{errors.productName?.message}</p>
              )}
            </div>

            <div className="relative z-0 mb-6 flex-grow max-w-xs group">
              <input
                type="number"
                name="sellingPrice"
                id="sellingPrice"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("sellingPrice", {
                  required: "please add your selling price",
                  valueAsNumber: true
                })}
              />
              <label
                htmlFor="sellingPrice"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                selling price
              </label>
              {errors.sellingPrice && (
                <p role="alert">{errors.sellingPrice?.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-8 flex-wrap">
            <div className="relative z-0 mb-6 flex-grow group">
              <input
                type="file"
                accept="image/*"
                name="image"
                id="image"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("image", {
                  required: "Please upload your image"
                })}
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                image
              </label>
              {errors.image && <p role="alert">{errors.image?.message}</p>}
            </div>
            <div className="relative z-0 mb-6 flex-grow group">
              <select
                id="productCategory"
                {...register("productCategory", {
                  required: "please add a product category"
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="">Select a product category</option>
                <option value="excellent">excellent</option>
                <option value="good">good</option>
                <option value="fair">fair</option>
              </select>
              {errors.productCategory && (
                <p role="alert">{errors.productCategory?.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-8 flex-wrap">
            <div className="relative z-0 mb-6 flex-grow group">
              <input
                type="date"
                name="purchaseDate"
                id="purchaseDate"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("purchaseDate", {
                  required: "please add product purchase date",
                  valueAsDate: true
                })}
              />
              <label
                htmlFor="purchaseDate"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                purchase date
              </label>
              {errors.purchaseDate && (
                <p role="alert">{errors.purchaseDate?.message}</p>
              )}
            </div>

            <div className="relative z-0 mb-6 flex-grow group">
              <input
                type="number"
                name="buyingPrice"
                id="buyingPrice"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("buyingPrice", {
                  required: "please add buying Price",
                  valueAsNumber: true
                })}
              />
              <label
                htmlFor="buyingPrice"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Buying price
              </label>
              {errors.buyingPrice && (
                <p role="alert">{errors.buyingPrice?.message}</p>
              )}
            </div>

            <div className="relative z-0 mb-6 flex-grow group">
              <select
                id="condition"
                {...register("condition", {
                  required: "please add condition"
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="">Select product condition</option>
                <option value="excellent">excellent</option>
                <option value="good">good</option>
                <option value="fair">fair</option>
              </select>
              {errors.condition && (
                <p role="alert">{errors.condition?.message}</p>
              )}
            </div>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 ">
              Your description
            </label>
            <textarea
              id="description"
              rows="4"
              {...register("description", {
                required: "please add description"
              })}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
              placeholder="Write your description here..."></textarea>
            {errors.description && (
              <p role="alert">{errors.description?.message}</p>
            )}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="sellerName"
                id="sellerName"
                value={user?.displayName}
                disabled
                readOnly
                className="block capitalize cursor-not-allowed py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("sellerName", {
                  value: user?.displayName
                })}
              />
              <label
                htmlFor="sellerName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                name
              </label>
              {/* {errors.sellerName && (
                <p role="alert">{errors.sellerName?.message}</p>
              )} */}
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="sellerEmail"
                id="sellerEmail"
                defaultValue={user?.email}
                disabled
                readOnly
                className="block cursor-not-allowed py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("sellerEmail", {
                  value: user?.email
                })}
              />
              <label
                htmlFor="sellerEmail"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                email
              </label>
              {/* {errors.sellerEmail && (
                <p role="alert">{errors.sellerEmail?.message}</p>
              )} */}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                name="sellerPhone"
                id="sellerPhone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("sellerPhone", {
                  required: "please add your phone number",
                  minLength: {
                    value: 10,
                    message: "Must have 10 digits or more"
                  }
                })}
              />
              <label
                htmlFor="sellerPhone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone number (123-456-7890)
              </label>
              {errors.sellerPhone && (
                <p role="alert">{errors.sellerPhone?.message}</p>
              )}
            </div>
            <div className="relative z-0 mb-6 w-full group">
              {/* <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Select your location
              </label> */}
              <select
                id="location"
                {...register("location", {
                  required: "please add your location"
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="">Select your location</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              {errors.location && (
                <p role="alert">{errors.location?.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
