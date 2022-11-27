import React from "react";
import { Link, useRouteError } from "react-router-dom";
import error404 from "../images/error-404.jpg";

const NotFound = () => {
  let error = useRouteError();

  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="text-center min-h-screen flex flex-col justify-center items-center py-8">
          <figure className="text-center">
            <img
              src={error404}
              alt="not found"
              className="md:w-2/6 object-cover mx-auto"
              width="5000"
              height="3334"
              decoding="async"
              fetchpriority="low"
              loading="lazy"
            />
          </figure>
          <h2 className="text-4xl xl:text-6xl">
            Opps!!! <br /> Something went wrong.
          </h2>

          <quote className="py-8 text-blue-600">
            {error ? error?.message || error?.statusText : `Come back later!`}
          </quote>

          <p className="flex flex-wrap gap-8 justify-center items-center">
            <Link to="/login" className="hover:underline text-purple-600">
              Login now
            </Link>
            <Link to="/" className="hover:underline text-purple-600">
              Go back to homepage
            </Link>
            <Link to="/register" className="hover:underline text-purple-600">
              Create a free account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
