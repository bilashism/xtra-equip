import { useEffect, useState } from "react";
import { APP_SERVER } from "../utilities/utilities";

const useBuyer = email => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`${APP_SERVER}/users/buyer/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setIsBuyer(data?.isAdmin);
          setIsBuyerLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [email]);

  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
