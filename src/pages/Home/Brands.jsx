import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Brands = () => {
  const availableBrands = [
    "https://www.seekpng.com/png/detail/554-5547411_our-brands-tapout-fitness-logo-png.png",
    "https://www.nicepng.com/png/detail/107-1078957_fitness-gym-logo-png.png",
    "https://e7.pngegg.com/pngimages/984/205/png-clipart-logo-men-s-fitness-brand-magazine-font-fitness-logo.png",
    "https://w7.pngwing.com/pngs/1019/957/png-transparent-gym-logo-fitness.png",
    "https://yourdigilab.com/images/shares/upload/6311d752d6fc1.png",
    "https://w7.pngwing.com/pngs/519/20/png-transparent-family-gym-wyszkow-logo-brand-training-bodyflo-family-gym-emblem-physical-fitness-label.png",
    "https://www.lifefitness.com/resource/blob/1417814/a05ea3e07831660ff70bc217d0cb0587/logo-icg-2021-data.png",
    "https://static1.squarespace.com/static/60c65cc5f8b960297629995f/t/60d4b4f1e79f2241373797f9/1671004244941/"
  ];
  return (
    <section className="">
      <div className="container-default">
        <h2 className="text-3xl font-bold mb-6 xl:mb-12 text-center">
          Available brands
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
            modules={[Autoplay]}
            className="">
            {availableBrands?.map(url => (
              <SwiperSlide>
                <img
                  className="rounded-t-lg w-64 h-24 object-contain mx-auto"
                  src={url}
                  alt="brand"
                  width="256"
                  height="96"
                  decoding="async"
                  fetchpriority="low"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brands;
