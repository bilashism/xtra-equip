import { useEffect, useState } from "react";
import { APP_SERVER } from "../utilities/utilities";

const useSeller = email => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`${APP_SERVER}/users/seller/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setIsSeller(data?.isSeller);
          setIsSellerLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [email]);

  return [isSeller, isSellerLoading];
};

export default useSeller;
