import React from "react";
import { formatDistance } from "date-fns";
import { ImLocation } from "react-icons/im";
import { GoUnverified, GoVerified } from "react-icons/go";

const CategoryProductCard = ({
  product,
  handleBookingModal,
  handleReportedModal
}) => {
  // console.log(product);
  const {
    _id,
    category,
    image,
    isAdvertised,
    isSellerVerified,
    isSold,
    isBooked,
    location,
    buyingPrice,
    isReported,
    postedOn,
    productName,
    sellerPhone,
    purchaseDate,
    description,
    sellerName,
    sellingPrice
  } = product;
  return (
    <div className="max-w-full shadow">
      <div>
        <img src={image} className="w-full h-44 object-cover" />
      </div>
      <div className="bg-white">
        <div className="flex flex-wrap gap-4 items-center justify-between px-4 pt-4 text-sm">
          <p className="">
            <span className="text-green-800 capitalize bg-green-100 p-2">
              {isSold ? "sold" : "available"}
            </span>
          </p>
          <p className="text-xs text-center text-gray-600  flex-grow">
            {formatDistance(new Date(), postedOn)} ago
          </p>
          <p className="flex flex-wrap gap-2 items-center">
            <ImLocation />
            <span className="text-indigo-600 capitalize">{location}</span>
          </p>
        </div>
        <div className="p-4">
          <div className="flex items-center flex-wrap justify-between">
            <h2 className="text-lg font-semibold capitalize">{productName}</h2>
            <b className="text-indigo-700 text-xl font-semibold">
              ${sellingPrice}
            </b>
          </div>
          <p className="text-sm text-gray-600 mt-2 overflow-hidden first-letter:capitalize text-ellipsis ">
            {description?.length >= 100
              ? `${description.slice(0, 99)}...`
              : description}
          </p>
          <div className="flex flex-col justify-between items-center gap-2 flex-wrap mt-4 text-sm">
            <div className="flex items-center justify-between gap-2 flex-wrap flex-grow w-full">
              <p className="flex items-center gap-2 flex-wrap">
                Seller: <b className="capitalize">{sellerName}</b>{" "}
                <span className="inline-flex items-center">
                  {isSellerVerified ? (
                    <GoVerified className="fill-blue-600" />
                  ) : (
                    ""
                  )}
                </span>
              </p>

              <a href={`tel:${sellerPhone}`} className="text-indigo-700">
                {sellerPhone}
              </a>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap flex-grow w-full">
              <p className="">
                Buying price: <b className="">${buyingPrice}</b>
              </p>
              <p className="">
                Used: {formatDistance(new Date(), purchaseDate)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="">
              <button
                type="button"
                disabled={isReported}
                onClick={() => handleReportedModal(product)}
                className={`${
                  isReported
                    ? "cursor-not-allowed"
                    : "hover:shadow hover:bg-indigo-400"
                } bg-gray-200  text-gray-900 text-xs font-bold py-1.5 px-3 rounded-full transition`}>
                Report{!isReported ? " item" : "ed"}
              </button>
            </div>
            <div className="">
              <button
                type="button"
                disabled={isBooked}
                onClick={() => handleBookingModal(product)}
                className={`${
                  isBooked
                    ? "cursor-not-allowed"
                    : "hover:shadow hover:bg-indigo-400"
                } bg-indigo-200 text-indigo-900 text-sm font-bold py-1.5 px-6 rounded-full transition`}>
                Book{!isBooked ? " now" : "ed"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductCard;
