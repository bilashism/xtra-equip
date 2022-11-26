import React from "react";
import { useQuery } from "@tanstack/react-query";
import { APP_SERVER } from "../../../utilities/utilities";
import UserCard from "../../../components/ui/UserCard";
import LoadingCircle from "../../../components/ui/LoadingCircle";

const AllBuyers = () => {
  const { data: buyers = [], isLoading } = useQuery({
    queryKey: ["users", "buyer"],
    queryFn: async () => {
      const response = await fetch(`${APP_SERVER}/users/buyer`, {
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
      <h2 className="text-2xl font-bold mb-8">All Buyers {buyers?.length}</h2>
      <div className="grid">
        {buyers.map(buyer => (
          <UserCard key={buyer._id} user={buyer} />
        ))}
      </div>
    </section>
  );
};

export default AllBuyers;
