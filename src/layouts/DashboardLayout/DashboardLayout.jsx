import React, { useContext, useState } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar.jsx";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [show, setShow] = useState(false);

  const adminMenuItems = (
    <>
      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-800 cursor-pointer items-center mb-6">
        <Link
          to="/dashboard/allSellers"
          className="flex items-center justify-between flex-grow">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-grid"
              width={18}
              height={18}
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
            <span className="text-sm  ml-2">all sellers</span>
          </div>
          <div className="py-1 px-3 bg-white rounded text-slate-800 flex items-center justify-center text-xs">
            5
          </div>
        </Link>
      </li>
      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-800 cursor-pointer items-center mb-6">
        <Link
          to="/dashboard/allBuyers"
          className="flex items-center justify-between flex-grow">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-puzzle"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
            </svg>
            <span className="text-sm  ml-2">all buyers</span>
          </div>
          <div className="py-1 px-3 bg-white rounded text-slate-800 flex items-center justify-center text-xs">
            8
          </div>
        </Link>
      </li>
      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-800 cursor-pointer items-center mb-6">
        <Link
          to="/dashboard/reportedItems"
          className="flex items-center justify-between flex-grow">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-compass"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 16 10 10 16 8 14 14 8 16" />
              <circle cx={12} cy={12} r={9} />
            </svg>
            <span className="text-sm  ml-2">reported items</span>
          </div>
        </Link>
      </li>
    </>
  );

  const sellerMenuItems = (
    <>
      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-800 cursor-pointer items-center mb-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-code"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1={14} y1={4} x2={10} y2={20} />
          </svg>
          <span className="text-sm  ml-2">add a product</span>
        </div>
      </li>
      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-800 cursor-pointer items-center mb-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-code"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1={14} y1={4} x2={10} y2={20} />
          </svg>
          <span className="text-sm  ml-2">my products</span>
        </div>
      </li>
      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-800 cursor-pointer items-center mb-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-code"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1={14} y1={4} x2={10} y2={20} />
          </svg>
          <span className="text-sm  ml-2">my buyers</span>
        </div>
      </li>
    </>
  );

  const buyerMenuItems = (
    <>
      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-800 cursor-pointer items-center mb-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-code"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1={14} y1={4} x2={10} y2={20} />
          </svg>
          <span className="text-sm  ml-2">my orders</span>
        </div>
      </li>
    </>
  );

  const dashboardMenuItems = (
    <>
      {isAdminLoading ? <LoadingCircle /> : isAdmin && adminMenuItems}
      {/* {sellerMenuItems}
      {buyerMenuItems} */}

      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-800 cursor-pointer items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-settings"
            width={18}
            height={18}
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
          <span className="text-sm  ml-2">settings</span>
        </div>
      </li>
    </>
  );

  return (
    <>
      <ScrollRestoration />
      <Navbar />

      <main className="">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-12 relative">
            <aside className="lg:col-span-2">
              <div className="w-64 max-w-full absolute sm:relative bg-indigo-100 shadow md:h-full flex-col justify-between hidden sm:flex">
                <div className="px-8">
                  <ul className="py-12 sticky top-0">{dashboardMenuItems}</ul>
                </div>
              </div>
              <div
                className={
                  show
                    ? "w-64 max-w-full absolute top-24 sm:relative bg-indigo-100 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out transform -translate-x-0 ml-0"
                    : "w-64 max-w-full absolute top-24 sm:relative bg-indigo-100 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out transform -translate-x-full  -ml-4"
                }
                id="mobile-nav">
                <div
                  className="h-10 w-10 bg-indigo-300 hover:shadow-xl transition sticky top-1/4 left-full right-0 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
                  id="mobile-toggler"
                  onClick={() => setShow(!show)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-indigo-800"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={6} cy={10} r={2} />
                    <line x1={6} y1={4} x2={6} y2={8} />
                    <line x1={6} y1={12} x2={6} y2={20} />
                    <circle cx={12} cy={16} r={2} />
                    <line x1={12} y1={4} x2={12} y2={14} />
                    <line x1={12} y1={18} x2={12} y2={20} />
                    <circle cx={18} cy={7} r={2} />
                    <line x1={18} y1={4} x2={18} y2={5} />
                    <line x1={18} y1={9} x2={18} y2={20} />
                  </svg>
                </div>
                <div className="px-8">
                  <ul className="pb-12">{dashboardMenuItems}</ul>
                </div>
              </div>
            </aside>

            <section className="lg:col-span-10">
              <Outlet />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DashboardLayout;
