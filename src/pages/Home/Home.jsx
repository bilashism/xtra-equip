import React from "react";
import useTitle from "../../hooks/useTitle";
import AdvertisedItems from "./AdvertisedItems";
import Categories from "./Categories";
import FeaturedBlogPosts from "./FeaturedBlogPosts";
import Header from "./Header";
import StartSelling from "./StartSelling";
import Statistics from "./Statistics";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <AdvertisedItems />
      <Categories />
      <Statistics />
      <StartSelling />
      <FeaturedBlogPosts />
    </>
  );
};

export default Home;
