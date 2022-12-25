import React from "react";
import NewsletterSubscription from "../../components/ui/NewsletterSubscription";

const Newsletter = () => {
  return (
    <section className="bg-slate-900 py-12">
      <h2 className="text-3xl text-center text-white">
        Sign up to our newsletter to receive stock offers and discounts
      </h2>
      <div className="flex justify-center">
        <NewsletterSubscription />
      </div>
    </section>
  );
};

export default Newsletter;
