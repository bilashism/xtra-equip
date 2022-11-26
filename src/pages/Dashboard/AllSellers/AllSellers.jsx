import React from "react";
import { useQuery } from "@tanstack/react-query";
import { APP_SERVER } from "../../../utilities/utilities";
import SellerCard from "./SellerCard";
import LoadingCircle from "../../../components/ui/LoadingCircle";

const AllSellers = () => {
  const { data: sellers = [], isLoading } = useQuery({
    queryKey: ["users", "seller"],
    queryFn: async () => {
      const response = await fetch(`${APP_SERVER}/users/seller`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
      const data = await response.json();
      return data;
    }
  });
  if (isLoading) {
    return <LoadingCircle />;
  }
  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-8">All Sellers {sellers?.length}</h2>
      <div className="grid">
        {sellers.map(seller => (
          <SellerCard key={seller._id} seller={seller} />
        ))}
      </div>
    </section>
  );
};

export default AllSellers;
