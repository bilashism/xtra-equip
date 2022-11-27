import React from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  return (
    <div className="">
      <div className="">
        <div
          className={`${
            showModal ? "flex" : "hidden"
          } h-full w-full fixed left-0 min-h-screen isolate z-20 items-center justify-center top-0 lg:mx-auto md:px-28 md:py-10 px-4 py-9`}>
          <div
            className="bg-black bg-opacity-70 w-full h-full absolute cursor-pointer"
            onClick={() => setShowModal(false)}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
