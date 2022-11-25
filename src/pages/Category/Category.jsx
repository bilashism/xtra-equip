import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingCircle from "../../components/ui/LoadingCircle";

const Category = () => {
  const navigation = useNavigation();
  const products = useLoaderData();

  if (navigation?.state === "loading") {
    return <LoadingCircle />;
  }
  console.log(products);

  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="">Category</h2>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Category;
