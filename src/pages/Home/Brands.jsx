import React from "react";
import Marquee from "react-fast-marquee";
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/splide/css";

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
      <div className="overflow-hidden">
        <h2 className="text-3xl font-bold mb-6 xl:mb-12 text-center">
          Available brands
        </h2>
        <div className="pt-4 overflow-hidden">
          <Marquee
            gradient={true}
            gradientWidth={50}
            speed={50}
            autoFill={true}
            pauseOnHover={true}
            className="[--items-gap:1.5rem]">
            {availableBrands?.map((src, idx) => (
              <figure
                className="flex h-full justify-center items-center text-center"
                key={`brand-${idx + 1}`}>
                <picture className="flex h-full justify-center items-center text-center">
                  <source media="(min-width: 320px)" srcSet={src} />
                  <img
                    src={src}
                    alt="brands logo"
                    className="xl:w-52 xl:h-44 object-contain"
                    loading="lazy"
                    width="208"
                    height="176"
                    decoding="async"
                    fetchpriority="low"
                  />
                </picture>
              </figure>
            ))}
          </Marquee>

          {/* <Splide
            className="overflow-hidden"
            extensions={{ AutoScroll }}
            hasTrack={false}
            aria-label="brands slider"
            options={{
              type: "loop",
              arrows: false,
              pauseOnFocus: false,
              pauseOnHover: false,
              pagination: false,
              drag: "free",
              focus: "center",
              easing: "linear",
              perPage: 2,
              mediaQuery: "min",
              breakpoints: {
                640: {
                  perPage: 4
                },
                1280: {
                  perPage: 6
                }
              },
              autoScroll: {
                speed: 1
              }
            }}>
            <SplideTrack>
              {availableBrands?.map((src, idx) => (
                <SplideSlide key={`brand-${idx + 1}`}>
                  <figure className="flex h-full justify-center items-center text-center px-4">
                    <picture className="flex h-full justify-center items-center text-center">
                      <source media="(min-width: 320px)" srcSet={src} />
                      <img
                        src={src}
                        alt="brands logo"
                        className="xl:w-52 xl:h-44 object-contain"
                        loading="lazy"
                        width="208"
                        height="176"
                        decoding="async"
                        fetchpriority="low"
                      />
                    </picture>
                  </figure>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide> */}
        </div>
      </div>
    </section>
  );
};

export default Brands;
