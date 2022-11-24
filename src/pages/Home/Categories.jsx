import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { APP_SERVER } from "../../utilities/utilities";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const limit = 8;
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories", "limit"],
    queryFn: async () => {
      const response = await fetch(`${APP_SERVER}/categories?limit=${limit}`);
      const data = await response.json();
      return data;
    }
  });

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid gap-12">
          <div className="flex flex-col-reverse justify-center items-center gap-6">
            <h2 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
              Browse By Categories
            </h2>
            <p className="text-xl leading-5 text-gray-600">
              {new Date().getFullYear()} Trendsetters
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 w-full">
            {categories.map(category => (
              <CategoryItem key={category._id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
