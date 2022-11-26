import React from "react";
import { formatDistance } from "date-fns";

const ProductCard = ({ product }) => {
  console.log(product);
  const {
    _id,
    category,
    image,
    isAdvertised,
    isSold,
    location,
    postedOn,
    productName,
    sellingPrice
  } = product;
  return (
    <div className="max-w-full shadow">
      <div>
        <img src={image} className="w-full h-44 object-cover" />
      </div>
      <div className="bg-white">
        <div className="flex items-center justify-between px-4 pt-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bookmark"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
          </div>
          {isAdvertised && (
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-yellow-900">Featured</p>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">{productName}</h2>
            <p className="text-xs text-gray-600 pl-5">
              {formatDistance(new Date(), postedOn)}
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot
            amazing videos
          </p>
          <div className="flex mt-4">
            <div>
              <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                {category.split(" ").shift()}
              </p>
            </div>

            <div className="pl-2">
              <p className="text-xs text-slate-600 px-2 bg-indigo-200 py-1">
                {isSold ? "sold" : "available"}
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
  );
};

export default ProductCard;
