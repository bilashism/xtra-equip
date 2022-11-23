import React from "react";

/**
 * It returns a figure element with an image element inside of it.
 * @returns A React component.
 */
const LoadingCircle = () => {
  return (
    <figure className="text-center">
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto; background: none; display: block; shape-rendering: auto;' width='78px' height='78px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Ccircle cx='50' cy='50' fill='none' stroke='%23ebbc50' stroke-width='10' r='35' stroke-dasharray='164.93361431346415 56.97787143782138'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50;360 50 50' keyTimes='0;1'%3E%3C/animateTransform%3E%3C/circle%3E%3C/svg%3E"
        alt="loading"
        className="w-10 h-10 mx-auto"
        width="40"
        height="40"
        decoding="async"
        fetchpriority="low"
      />
    </figure>
  );
};

export default LoadingCircle;
