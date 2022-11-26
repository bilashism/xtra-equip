import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { APP_SERVER } from "../../../utilities/utilities";
import UserCard from "../../../components/ui/UserCard";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import UserConfirmationModal from "../../../components/ui/UserConfirmationModal";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const [showUserConfirmationModal, setShowUserConfirmationModal] =
    useState(false);
  const [userData, setUserData] = useState();

  const {
    data: buyers = [],
    isLoading,
    refetch
  } = useQuery({
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

  const handleModal = user => {
    setShowUserConfirmationModal(true);
    setUserData(user);
  };

  const handleUserDelete = id => {
    fetch(`${APP_SERVER}/users/${id}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data?.deletedCount >= 1) {
          toast.success(`Deleted successfully!`);
          refetch();
          setShowUserConfirmationModal(false);
        }
      })
      .catch(err => {
        toast.error(`Something went wrong!`);
        console.error(err);
      });
  };

  if (isLoading) {
    return <LoadingCircle />;
  }
  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-8">All Sellers {buyers?.length}</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {buyers.map(seller => (
          <UserCard
            key={seller._id}
            user={seller}
            setShowUserConfirmationModal={setShowUserConfirmationModal}
            handleModal={handleModal}
          />
        ))}
      </div>

      <div className="relative">
        <UserConfirmationModal
          showUserConfirmationModal={showUserConfirmationModal}
          setShowUserConfirmationModal={setShowUserConfirmationModal}
          userData={userData}
          userHandler={handleUserDelete}
        />
      </div>
    </section>
  );
};

export default AllBuyers;
