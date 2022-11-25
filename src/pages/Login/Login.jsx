import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import loginImg from "../../images/logo.svg";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { APP_SERVER } from "../../utilities/utilities";
import useToken from "../../hooks/useToken";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm();
  const { userLogin, setAuthLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [token] = useToken(userLoginEmail);
  // console.log(location);
  const googleProvider = new GoogleAuthProvider();
  useTitle("Login");

  // reset the form after successful submission
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);
  // handle User Login form
  const handleUserLogin = data => {
    const { email, password } = data;
    userLogin(email, password)
      .then(user => {
        toast.success("Login successful!");
        // form.reset();
        setUserLoginEmail(email);
      })
      .catch(err => {
        err?.code && toast.error(err.code);
        console.error(err);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  const handleProviderLogIn = provider => {
    providerLogin(provider)
      .then(data => {
        toast.success("Logged in successfully!");
        const curUserEmail = data.user.email;
        // getToken(curUser);
        setUserLoginEmail(curUserEmail);
      })
      .catch(err => {
        err?.code && toast.error(err.code);
        console.error(err);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in to continue
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">
                Create a free account
              </Link>
            </p>

            <form onSubmit={handleSubmit(handleUserLogin)} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      autoComplete="username"
                      id="email"
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      {...register("email", {
                        required: "Please provide your email"
                      })}
                    />
                  </div>
                  {errors?.email && (
                    <p className="text-red-500">{errors.email?.message}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>

                    <a
                      href="#"
                      title=""
                      className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700">
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      id="password"
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      {...register("password", {
                        required: "Please enter a password",
                        minLength: {
                          value: 6,
                          message: "Password must be 6 characters long"
                        }
                      })}
                    />
                  </div>
                  {errors?.password && (
                    <p className="text-red-500">{errors.password?.message}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                    Log in
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <button
                onClick={() => handleProviderLogIn(googleProvider)}
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg
                    className="w-6 h-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </div>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <img
              className="w-full mx-auto rounded shadow hover:scale-105 transition-transform"
              src="https://images.unsplash.com/photo-1591741535018-d042766c62eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
