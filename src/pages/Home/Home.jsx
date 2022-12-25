import React from "react";
import useTitle from "../../hooks/useTitle";
import AdvertisedItems from "./AdvertisedItems";
import Brands from "./Brands";
import Categories from "./Categories";
import FeaturedBlogPosts from "./FeaturedBlogPosts";
import Header from "./Header";
import Newsletter from "./Newsletter";
import StartSelling from "./StartSelling";
import Statistics from "./Statistics";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <AdvertisedItems />
      <Categories />
      <Brands />
      <Statistics />
      <StartSelling />
      <FeaturedBlogPosts />
      <Newsletter />
    </>
  );
};

export default Home;
