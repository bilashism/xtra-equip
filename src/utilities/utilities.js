export const APP_NAME = `Xtra Equip`;
export const APP_SERVER = `${
  import.meta.env?.VITE_APP_SERVER || `http://localhost:5000`
}`;
export const IMG_DB_API_KEY = `${import.meta.env?.VITE_APP_IMG_DB_API_KEY}`;
/**
 * If the function is called again before the delay, then the function is called with the latest
 * arguments after the delay.
 * @returns A function that takes in a callback and a delay.
 */
export const throttle = (cb, delay = 500) => {
  let latestArgs;
  let shouldWait = false;

  const timeOut = () => {
    if (latestArgs === null) {
      shouldWait = false;
    } else {
      latestArgs && cb(...latestArgs);
      latestArgs = null;
      setTimeout(timeOut, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      latestArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeOut, delay);
  };
};

/**
 * The debounce function takes a callback function and a delay as arguments, and returns a function
 * that will call the callback function after the delay has passed.
 * @returns A function that takes in a callback and a delay.
 */
export const debounce = (cb, delay = 500) => {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
