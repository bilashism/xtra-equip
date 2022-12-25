import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const NewsletterSubscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm();

  const subscribeToNewsletter = data => {
    const { email } = data;
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success("Submitted successfully!");
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(subscribeToNewsletter)}
      method="POST"
      className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
      <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
        <div className="flex flex-col items-start sm:flex-row">
          <div className="flex-1 w-full min-w-0">
            <div className="relative text-gray-400 focus-within:text-gray-600">
              <label htmlFor="email" className="sr-only"></label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: "Please provide a valid email address!"
                })}
                placeholder="Enter email to get notified"
                className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
            Subscribe
          </button>
        </div>
      </div>
      {errors?.email && (
        <p className="pt-4 text-red-500 text-center">
          {errors?.email?.message}
        </p>
      )}
    </form>
  );
};

export default NewsletterSubscription;
