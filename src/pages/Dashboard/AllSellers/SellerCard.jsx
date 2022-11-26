import React from "react";
import { FaUser } from "react-icons/fa";

const SellerCard = ({ seller }) => {
  const { name, email, _id, img } = seller;
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md  ">
      <div className="flex flex-col items-center pb-10">
        <div className="pt-4">
          {img ? (
            <picture>
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
            </picture>
          ) : (
            <p>{<FaUser className="w-24 h-24" />}</p>
          )}
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 capitalize">
          {name}
        </h5>
        <span className="text-sm text-gray-500 ">{email}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
