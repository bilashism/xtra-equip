import React from "react";
import useTitle from "../../hooks/useTitle";
import AdvertisedItems from "./AdvertisedItems";
import Header from "./Header";
import Statistics from "./Statistics";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <AdvertisedItems />
      <Statistics />
    </>
  );
};

export default Home;
