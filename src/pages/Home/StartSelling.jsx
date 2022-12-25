import React from "react";
import { Link } from "react-router-dom";

const StartSelling = () => {
  return (
    <section className="relative isolate">
      <div className="container-default grid xl:grid-cols-12 py-10 xl:min-h-[75vh] xl:items-center">
        <div className="xl:col-span-4 text-yellow-100 flex flex-col gap-6">
          <h2 className="text-2xl xl:text-5xl font-bold drop-shadow">
            An easy and convenient way to sell your unwanted gym equipment
          </h2>
          <p className="text-xl">
            Dispose of your used hardware and get cash in your bank in less than
            1 business week.
          </p>
          <Link
            to="/register"
            className="self-start border py-2 px-4 hover:bg-yellow-300 hover:text-black transition">
            Start selling
          </Link>
        </div>
      </div>

      <div className="absolute w-full h-full -z-10 overflow-hidden top-0 after:absolute after:bg-slate-900 after:w-full after:h-full after:top-0 after:bg-opacity-80 after:backdrop-filter after:backdrop-blur">
        <figure className="w-full h-full ">
          <picture>
            <source
              srcSet="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              media="(min-width: 0px)"
            />
            <img
              src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Start Selling banner"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
};

export default StartSelling;
