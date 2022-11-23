import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  let error = useRouteError();

  return (
    <div className="text-center">
      <h2>Opps!!! Something went wrong.</h2>

      <div className="">
        {error ? error?.message || error?.statusText : `Come back later!`}
      </div>

      <p>
        <Link to="/" className="hover:underline text-purple-600">
          Go back to homepage
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
