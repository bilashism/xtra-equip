import React from "react";
import CountUp from "react-countup";
import certificationBadge from "../../images/certification-badge.png";

const Header = () => {
  return (
    <header className="bg-yellow-50">
      <section className="container mx-auto px-4">
        <div className="relative">
          <section className=" overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
              <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className=" absolute bottom-0 right-0 hidden lg:block">
                  <img
                    className="object-contain w-auto h-48"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                    alt=""
                  />
                </div>

                <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                  <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                    Get it done.
                    <br />
                    Fast, Easy.
                  </h1>
                  <p className="mt-8 text-xl text-black">
                    We help you to make your life easier. Get a fitness
                    equipment at a great deal anytime anywhere.
                  </p>

                  <form
                    action="#"
                    method="POST"
                    className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                    <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                      <div className="flex flex-col items-start sm:flex-row">
                        <div className="flex-1 w-full min-w-0">
                          <div className="relative text-gray-400 focus-within:text-gray-600">
                            <label htmlFor="email" className="sr-only"></label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter email to get notified"
                              className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                              required=""
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="mt-5 text-base text-black">
                    Only the good stuff. 100% secured deal.
                  </p>
                </div>

                <div className="absolute hidden lg:block right-0 z-10 w-40 h-40 lg:top-24 lg:-left-20">
                  <img
                    className="w-40 h-40 object-contain md:w-40 md:h-40 -rotate-12"
                    src={certificationBadge}
                    alt="certification badge"
                  />
                </div>
              </div>

              <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full "
                    src="https://images.unsplash.com/photo-1598575435251-574ba3ba7ad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0">
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center">
                      <svg
                        className="w-10 h-10 text-orange-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h2 className="font-bold text-white text-7xl ml-2.5">
                        <CountUp
                          end={1124}
                          formattingFn={n => new Intl.NumberFormat().format(n)}
                          enableScrollSpy
                        />
                      </h2>
                    </div>
                    <p className="max-w-xs mt-1.5 text-xl text-white">
                      Products available. Hurry up!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </header>
  );
};

export default Header;
