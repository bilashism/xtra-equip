import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { APP_SERVER } from "../../utilities/utilities";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { formatDistance } from "date-fns";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const AdvertisedItems = () => {
  const { data: advertisedProducts = [], isLoading } = useQuery({
    queryKey: ["products", "advertisement"],
    queryFn: async () => {
      const response = await axios(`${APP_SERVER}/products/advertisement`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
      const data = await response.data;
      return data;
    }
  });

  if (advertisedProducts?.length === 0) {
    return;
  }

  if (isLoading) {
    return <LoadingCircle />;
  }
  // console.log(advertisedProducts);

  return (
    <div className="relative overflow-hidden">
      <h2 className="text-3xl text-center my-12 drop-shadow-md">
        Advertised Items
      </h2>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            480: {
              centeredSlides: false,
              slidesPerView: 2,
              spaceBetween: 20
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            1300: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
          centeredSlides={true}
          initialSlide={0}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Autoplay]}
          className="">
          {advertisedProducts?.map(
            ({
              _id,
              category,
              image,
              isAdvertised,
              isSold,
              location,
              postedOn,
              productName,
              description,
              sellingPrice
            }) => (
              <SwiperSlide key={_id} className="mb-10 px-1">
                <div className="max-w-2xl mx-auto py-4">
                  <div className="bg-white shadow-md border border-gray-50 rounded-lg max-w-2xl mx-auto">
                    <Link to={`/categories/${category?.split(" ").pop()}`}>
                      <img
                        className="rounded-t-lg p-8 w-64 h-64 object-cover mx-auto"
                        src={image}
                        alt={productName}
                        width="256"
                        height="256"
                        decoding="async"
                        fetchpriority="low"
                        loading="lazy"
                      />
                    </Link>
                    <div className="px-5 pb-5">
                      <Link
                        to={`/categories/${category?.split(" ").pop()}`}
                        className="flex items-center gap-4">
                        <h3 className="text-gray-900 font-semibold text-xl tracking-tight capitalize truncate flex-grow">
                          {productName}
                        </h3>
                        <p className="text-xs text-right basis-2/5">
                          {formatDistance(new Date(), postedOn)} ago
                        </p>
                      </Link>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-3xl font-bold text-gray-900 ">
                          ${sellingPrice}
                        </span>
                        <Link
                          to={`/categories/${category?.split(" ").pop()}`}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                          View more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default AdvertisedItems;
