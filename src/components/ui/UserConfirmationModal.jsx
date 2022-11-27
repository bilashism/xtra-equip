import React, { useState } from "react";

const UserConfirmationModal = ({
  showUserConfirmationModal,
  setShowUserConfirmationModal,
  userData,
  userHandler
}) => {
  // const { name, _id } = userData;
  // console.log(userData);
  return (
    <div className="">
      <div className="">
        <div
          className={`${
            showUserConfirmationModal ? "flex" : "hidden"
          } h-full w-full fixed left-0 min-h-screen isolate z-20 items-center justify-center top-0 lg:mx-auto md:px-28 md:py-10 px-4 py-9`}
          id="modal">
          <div
            className="bg-black bg-opacity-70 w-full h-full absolute cursor-pointer"
            onClick={() => setShowUserConfirmationModal(false)}
          />
          <div className="bg-white border border-gray-300 xl:w-2/6 w-full relative z-30 xl:px-14 lg:px-28 md:px-16 px-4 py-10 flex flex-col items-center justify-center">
            <div>
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 w-14 h-14 text-red-400 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className=" text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 mt-3">
                Delete{" "}
                <span className="text-red-600 capitalize">
                  {userData?.name || userData?.productName}
                </span>
                ?
              </h2>
              <p className="text-base leading-4 mt-6 text-gray-600">
                Are you sure?
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 mt-8">
              <button
                role="button"
                onClick={() => userHandler(userData?._id)}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                Delete now
              </button>
              <button
                role="button"
                aria-label="no thanks"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                onClick={() => setShowUserConfirmationModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserConfirmationModal;
