import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { APP_SERVER } from "../../../utilities/utilities";
import UserCard from "../../../components/ui/UserCard";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import UserConfirmationModal from "../../../components/ui/UserConfirmationModal";
import toast from "react-hot-toast";
import axios from "axios";
import useTitle from "../../../hooks/useTitle";

const AllSellers = () => {
  useTitle("All sellers");
  const [showUserConfirmationModal, setShowUserConfirmationModal] =
    useState(false);
  const [userData, setUserData] = useState();

  const {
    data: sellers = [],
    isLoading,
    refetch
  } = useQuery({
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

  const handleVerifySeller = (ev, seller) => {
    const sellerId = seller?._id;
    const sellerEmail = seller?.email;
    const btn = ev.target;
    btn.disabled = true;
    const verified = {
      isSellerVerified: true
    };

    axios
      .put(
        `${APP_SERVER}/users/seller/${sellerId}?email=${sellerEmail}`,
        verified,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      )
      .then(data => {
        // console.log(data);
        if (data.data?.modifiedCount) {
          toast.success(`Verified successfully!`);
          refetch();
          setShowUserConfirmationModal(false);
        }
      })
      .catch(err => {
        toast.error(`Something went wrong!`);
        btn.disabled = false;
        console.error(err);
      });
  };

  if (isLoading) {
    return <LoadingCircle />;
  }
  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-8">All Sellers {sellers?.length}</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {sellers.map(seller => (
          <UserCard
            key={seller._id}
            user={seller}
            setShowUserConfirmationModal={setShowUserConfirmationModal}
            handleModal={handleModal}
            handleVerify={handleVerifySeller}
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

export default AllSellers;
