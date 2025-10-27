import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Page8 = () => {
  // FIX: Separate state for each question
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <section>
      {/* ------------heading------------ */}
      {/* THE ONLY CHANGE IS HERE: Added lg:items-start */}
      <div className="flex flex-col gap-8 lg:flex-row justify-around lg:items-start p-4 min-h-screen bg-[#DDE7F0]">
        <div>
          <h2 className="text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ------------faq section------------ */}
        <div className="flex flex-col gap-5 lg:pr-20 lg:max-w-[50%] lg:max-h-full">
          
          {/* -----------div1----------- */}
          <div className="p-4">
            <div
              onClick={() => setOpen1(!open1)} // Use open1
              className="flex gap-3 cursor-pointer select-none"
            >
              <span className="text-indigo-500 text-2xl">
                {open1 ? <AiFillMinusCircle /> : <AiFillPlusCircle />} {/* Use open1 */}
              </span>
              <h1 className="font-semibold text-gray-800 text-lg lg:text-xl">
                What kinds of things can I sell with Podia?
              </h1>
            </div>

            {open1 && ( // Use open1
              <p className="mt-3 text-gray-600">
                You can sell digital downloads, online courses, coaching,
                webinars, and pretty much any type of file you can think of. We
                have customers who sell ebooks, printables, self-paced courses,
                cohort courses, access-limited courses, coaching sessions, live
                webinars, prerecorded webinars, product bundles, templates, and
                so much more.
                <br />
                You can also give away products for free, like free courses,
                discovery calls, and lead magnets. Podia handles all product
                hosting and file delivery. At this time, Podia does not have a
                feature for selling physical products.
              </p>
            )}
          </div>

          {/* -----------div2----------- */}
          <div className="p-4">
            <div
              onClick={() => setOpen2(!open2)} // Use open2
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span className="text-indigo-500 text-2xl">
                {open2 ? <AiFillMinusCircle /> : <AiFillPlusCircle />} {/* Use open2 */}
              </span>
              <h1 className="font-semibold text-gray-800 text-lg lg:text-xl">
                Can I build landing pages in Podia?
              </h1>
            </div>

            {open2 && ( // Use open2
              <p className="mt-3 text-gray-600">
                Absolutely! You can use the Podia website tool to create a
                full website, stand-alone landing pages, or both. You can also
                decide whether or not each page has a site header. No matter
                what you create, you’ll have access to the same great library
                of website sections and design features.
              </p>
            )}
          </div>

          {/* -----------div3----------- */}
          <div className="p-4">
            <div
              onClick={() => setOpen3(!open3)} // Use open3
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span className="text-indigo-500 text-2xl">
                {open3 ? <AiFillMinusCircle /> : <AiFillPlusCircle />} {/* Use open3 */}
              </span>
              <h1 className="font-semibold text-gray-800 text-lg lg:text-xl">
                What payment processors does Podia support?
              </h1>
            </div>

            {open3 && ( // Use open3
              <p className="mt-3 text-gray-600">
                You can connect Stripe and PayPal as your payment processors.
                <br />
                If you connect Stripe to Podia, you can accept credit card
                payments for products, payment plans, and recurring
                subscriptions. With Stripe you also get to accept alternative
                payment methods, such as Google Pay, Apple Pay, iDeal, SEPA
                Debit, Stripe Link, etc.
                <br />
                If you connect PayPal to Podia, your customers will be able to
                purchase your products through PayPal.
              </p>
            )}
          </div>

          {/* -----------div4----------- */}
          <div className=" p-4">
            <div
              onClick={() => setOpen4(!open4)} // Use open4
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span className="text-indigo-500 text-2xl">
                {open4 ? <AiFillMinusCircle /> : <AiFillPlusCircle />} {/* Use open4 */}
              </span>
              <h1 className="font-semibold text-gray-800 text-lg lg:text-xl">
                How do I get paid?
              </h1>
            </div>

            {open4 && ( // Use open4
              <p className="mt-3 text-gray-600">
                It’s simple: connect your Stripe or PayPal account and anything
                you earn on Podia will be deposited directly into your account.
              </p>
            )}
          </div>

          {/* -----------div5----------- */}
          <div className=" p-4">
            <div
              onClick={() => setOpen5(!open5)} // Use open5
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span className="text-indigo-500 text-2xl">
                {open5 ? <AiFillMinusCircle /> : <AiFillPlusCircle />} {/* Use open5 */}
              </span>
              <h1 className="font-semibold text-gray-800 text-lg lg:text-xl">
                What languages and currencies are supported?
              </h1>
            </div>

            {open5 && ( // Use open5
              <p className="mt-3 text-gray-600">
                We support 11 languages and more than 20 global currencies. You
                can find a full list of{" "}
                <a href="#" className="text-indigo-500 underline">
                  supported languages here
                </a>
                , and our{" "}
                <a href="#" className="text-indigo-500 underline">
                  supported currencies here.
                </a>
              </p>
            )}
          </div>

          {/* -----------div6----------- */}
          <div className=" p-4">
            <div
              onClick={() => setOpen6(!open6)} // Use open6
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <span className="text-indigo-500 text-2xl">
                {open6 ? <AiFillMinusCircle /> : <AiFillPlusCircle />} {/* Use open6 */}
              </span>
              <h1 className="font-semibold text-gray-800 text-lg lg:text-xl">
                How does Podia handle taxes?
              </h1>
            </div>

            {open6 && ( // Use open6
              <p className="mt-3 text-gray-600 ">
                Podia can make tax time less stressful with global tax support.
                While Podia doesn’t file or remit your taxes for you, you can
                collect taxes (and addresses, if you need them) from 230 tax
                jurisdictions across all payment methods.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page8;