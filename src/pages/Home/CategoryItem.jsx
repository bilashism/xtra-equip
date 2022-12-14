import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { _id, name, img } = category;
  return (
    <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-indigo-600 before:bg-opacity-20 group hover:before:bg-opacity-70 transition-all">
      <Link
        to={`/categories/${_id}`}
        className="flex justify-center items-center h-full">
        <picture className="max-w-xl h-full">
          <img
            className="w-full h-full rounded-md object-cover"
            src={img}
            alt={name}
            width="200"
            height="300"
            decoding="async"
            fetchpriority="low"
          />
        </picture>
        <div className="absolute inset-0 p-8 text-white flex flex-col">
          <div className="mt-auto">
            <h3 className="text-3xl font-bold mb-3 text-center capitalize group-hover:underline group-hover:-translate-y-4 group-hover:scale-110 transition">
              {name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
