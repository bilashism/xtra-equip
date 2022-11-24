import React from "react";
import useTitle from "../../hooks/useTitle";
import AdvertisedItems from "./AdvertisedItems";
import Header from "./Header";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <AdvertisedItems />
    </>
  );
};

export default Home;
