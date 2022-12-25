import React from "react";
import { Link } from "react-router-dom";

const FeaturedBlogPosts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around m-2 items-center h-full rounded-2xl bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500">
      <div className="container-default xl:grid xl:grid-cols-12 xl:items-center gap-12 xl:gap-8">
        <div className="xl:col-span-4 flex flex-col gap-8 items-center  text-white">
          <h2 className="text-3xl md:text-7xl font-bold text-center xl:text-left">
            The latest news from the magazine
          </h2>
          <Link
            to="/blogs"
            className="xl:self-start border py-2 px-4 hover:bg-slate-50 bg-yellow-300 text-black transition">
            View all posts
          </Link>
        </div>
        <div className="xl:col-span-8  overflow-hidden flex flex-col md:flex-row justify-center">
          <div className="overflow-hidden md:w-1/4 bg-white m-4 shadow-lg flex flex-col text-black hover:text-white hover:bg-pink-500 hover:scale-105 rounded cursor-pointer">
            <div className="h-26 w-full overflow-hidden">
              <img
                alt=" "
                src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                decoding="async"
                className="h-80 w-full object-cover"
                width="240"
                height="320"
              />
            </div>
            <div className="text-sm m-2">30 July, 2022</div>
            <div className="font-medium text-normal m-2">
              These buildings have special features for office workspace.
            </div>
          </div>
          <div className="overflow-hidden md:w-1/4 bg-white m-4 shadow-lg flex flex-col text-black hover:text-white hover:bg-pink-500 hover:scale-105 rounded cursor-pointer">
            <div className="h-26 w-full overflow-hidden">
              <img
                alt=" "
                src="https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                decoding="async"
                className="h-80 w-full object-cover"
                width="240"
                height="320"
              />
            </div>
            <div className="text-sm m-2">30 March, 2023</div>
            <div className="font-medium text-normal m-2">
              Top 5 beaches in Mauritius to open restraunts or hotels.
            </div>
          </div>
          <div className="overflow-hidden md:w-1/4 bg-white m-4 shadow-lg flex flex-col text-black hover:text-white hover:bg-pink-500 hover:scale-105 rounded cursor-pointer">
            <div className="h-26 w-full overflow-hidden">
              <span>
                <img
                  alt=" "
                  src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  decoding="async"
                  className="h-80 w-full object-cover"
                  width="240"
                  height="320"
                />
              </span>
            </div>
            <div className="text-sm m-2">30 March, 2023</div>
            <div className="font-medium text-normal m-2">
              Best laptop for gaming and video editing with RTX3070 card.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPosts;
