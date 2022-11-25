import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import logo from "../../../images/logo.svg";
import { APP_NAME } from "../../../utilities/utilities";
import { FaHome } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [isMobile, setIsMobile] = useState(
    !window.matchMedia(`(min-width: 1280px)`).matches
  );
  const { user, userLogOut } = useContext(AuthContext);

  useEffect(() => {
    const cleanup = () =>
      window.addEventListener("resize", () => {
        setIsMobile(!window.matchMedia(`(min-width: 1280px)`).matches);
        setProfile(false);
        setShow(null);
      });

    return () => cleanup();
  }, []);

  const logoItem = (
    <Link to="/">
      <img
        src={logo}
        alt={`${APP_NAME} logo`}
        className="w-16 h-16 mx-auto"
        width="64"
        height="64"
        decoding="async"
        fetchpriority="low"
      />
    </Link>
  );

  const menuItems = (
    <>
      <li className="">
        <Link to={"/"} className="cursor-pointer flex items-center">
          {isMobile && <FaHome className="text-indigo-700 w-6 h-6" />}
          <span className=" hover:text-indigo-700 xl:text-base text-base ml-3">
            Home
          </span>
        </Link>
      </li>
      <li className="">
        <Link to="/dashboard" className="cursor-pointer flex items-center">
          {isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-8 md:h-8 text-indigo-700"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x={4} y={4} width={6} height={6} rx={1} />
              <rect x={14} y={4} width={6} height={6} rx={1} />
              <rect x={4} y={14} width={6} height={6} rx={1} />
              <rect x={14} y={14} width={6} height={6} rx={1} />
            </svg>
          )}
          <span className=" hover:text-indigo-700 xl:text-base text-base ml-3">
            Dashboard
          </span>
        </Link>
      </li>
    </>
  );

  const profileMenuItems = (
    <>
      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={12} cy={7} r={4} />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <span className="ml-2">My Profile</span>
        </div>
      </li>
      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-help"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx={12} cy={12} r={9} />
          <line x1={12} y1={17} x2={12} y2="17.01" />
          <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
        </svg>
        <span className="ml-2">Help Center</span>
      </li>
      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-settings"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx={12} cy={12} r={3} />
        </svg>
        <span className="ml-2">Account Settings</span>
      </li>
      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
        <button
          type="button"
          className="flex items-center"
          onClick={userLogOut}>
          <IoMdExit className="w-5 h-5" />
          <span className="ml-2">Log Out</span>
        </button>
      </li>
    </>
  );
  const profileDropdown = (
    <div
      className="w-full flex items-center justify-end relative cursor-pointer"
      onClick={() => setProfile(!profile)}>
      {user?.uid ? (
        <>
          {profile && (
            <ul className="p-2 w-40 border-r bg-white absolute rounded left-0 shadow mt-16 top-0 ">
              {profileMenuItems}
            </ul>
          )}
          {user?.photoUrl ? (
            <img
              className="rounded h-10 w-10 object-cover"
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
              alt="logo"
            />
          ) : (
            <HiUserCircle className="w-10 h-10 transition-colors hover:text-indigo-600" />
          )}
          <p className="text-white text-sm ml-2">Jane Doe</p>
        </>
      ) : (
        <Link
          to="/login"
          className="inline-flex items-center justify-center w-full px-4 py-2 capitalize font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-lg sm:w-auto hover:bg-orange-600 focus:bg-orange-600">
          log in
        </Link>
      )}
    </div>
  );
  const searchItem = (
    <div className="relative w-full">
      <div className="absolute ml-3 inset-0 m-auto w-4 h-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx={10} cy={10} r={7} />
          <line x1={21} y1={21} x2={15} y2={15} />
        </svg>
      </div>
      <input
        className="border border-indigo-400 focus:outline-none focus:border-indigo-700 w-full rounded text-sm bg-gray-50 pl-8 py-2 "
        type="text"
        placeholder="Search"
      />
    </div>
  );

  return (
    <nav className="sticky top-0 w-full isolate z-20">
      <div className="bg-gray-50 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full mx-auto hidden xl:block bg-gray-50 shadow">
          <div className="container px-4 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <div className="mr-10 flex items-center">{logoItem}</div>
              <ul className="pr-12 xl:flex items-center h-full hidden">
                {menuItems}
              </ul>
            </div>
            <div className="h-full xl:flex items-center justify-end hidden">
              <div className="w-full h-full flex items-center">
                <div className="w-full pr-12 h-full flex items-center border-gray-700 border-r">
                  {searchItem}
                </div>
                <div className="w-full h-full flex items-center">
                  <div className="w-32 h-full flex items-center justify-center border-gray-700 border-r text-indigo-400 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                  </div>
                  {profileDropdown}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav>
          <div className="p-4 w-full flex xl:hidden justify-between items-center bg-gray-50 sticky top-0 z-40 shadow">
            <div className="">{logoItem}</div>
            {/* <div> */}
            <div id="menu" className="" onClick={() => setShow(!show)}>
              {show ? (
                " "
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              )}
            </div>
            {/* </div> */}
          </div>

          {/*Mobile responsive sidebar*/}
          <div
            className={`fixed xl:hidden w-full h-full transition-transform transform z-40 top-0  ${
              show ? " -translate-x-0 " : "-translate-x-full"
            }`}
            id="mobile-nav">
            <div
              className="bg-indigo-500 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-gray-50 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-4 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-4 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">{logoItem}</div>
                        <div
                          id="cross"
                          className=""
                          onClick={() => setShow(!show)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="py-8">{menuItems}</ul>
                  </div>
                  <div className="w-full pt-4">
                    <div className="flex justify-center mb-4 w-full">
                      {searchItem}
                    </div>

                    <div className="border-t border-gray-800">
                      <div className="w-full flex items-center justify-between pt-1">
                        <ul className="flex">
                          <li className="cursor-pointer  pt-5 pb-3">
                            <div className="w-6 h-6 md:w-8 md:h-8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-messages"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                              </svg>
                            </div>
                          </li>
                          <li className="cursor-pointer  pt-5 pb-3 pl-3">
                            <div className="w-6 h-6 md:w-8 md:h-8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bell"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                              </svg>
                            </div>
                          </li>
                        </ul>
                        {profileDropdown}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Sidebar ends */}

        {/* Code block ends */}
      </div>
    </nav>
  );
};

export default Navbar;
