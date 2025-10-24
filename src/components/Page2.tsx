import React from "react";
import { BsArrowUpLeftSquareFill } from "react-icons/bs";
import { FaBookMedical } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { RiMessage2Fill, RiVideoFill } from "react-icons/ri";

const Page2 = () => {
  return (
    <section className="flex flex-col p-2 bg-white ">
      {/* ---------- MAIN HEADING ---------- */}
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Sell anything you can imagine
        </h1>
        <p className="text-gray-600">
          Podia gives you the flexibility to sell any digital product you want.
          It hosts everything and manages access, ensuring only paying customers
          can access your products.
        </p>
      </div>

      {/* ---------- CONTENT BOX ---------- */}
      <div className="flex flex-wrap justify-center gap-2 ">
        {/* card 1 */}
        <a href="#" className="flex-1 min-w-[300px] lg:max-w-[320px]">
          <div className="flex flex-col gap-5 m-2 p-2 rounded-lg h-full">
            <div className="text-6xl">
              <BsArrowUpLeftSquareFill />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex justify-between items-center">
                <span>Beautiful online courses you can build in minutes</span>
                <IoMdArrowDropright className="text-2xl flex-shrink-0" />
              </h3>
              <p className="font-semibold text-left">
                Add videos, files, and lessons — and organize your course however
                you like. Podia hosts your content and manages payments from your
                customers.
              </p>
            </div>
          </div>
        </a>

        {/* card 2 */}
        <a href="#" className="flex-1 min-w-[300px] lg:max-w-[320px]">
          <div className="flex flex-col gap-5 m-2 p-2 rounded-lg h-full">
            <div className="text-6xl">
              <FaBookMedical />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex justify-between items-center">
                <span>Ebooks , templates and any file you can think of</span>
                <IoMdArrowDropright className="text-2xl flex-shrink-0" />
              </h3>
              <p className="font-semibold text-left">
                have an ebook to sell? Templates you love? Podia makes it easy to
                spin up sales page and sell ebooks, templates, audio files, video
                files, spreadsheets, and any other file type.
              </p>
            </div>
          </div>
        </a>

        {/* card 3 */}
        <a href="#" className="flex-1 min-w-[300px] lg:max-w-[320px]">
          <div className="flex flex-col gap-5 m-2 p-2 rounded-lg h-full">
            <div className="text-6xl">
              <RiMessage2Fill />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex justify-between items-center">
                <span>
                  One on One coaching and consultations, sold and scheduled from
                  your site
                </span>
                <IoMdArrowDropright className="text-2xl flex-shrink-0" />
              </h3>
              <p className="font-semibold text-left">
                Sell one on one access to your expertise and schedule consultations
                directly from your site.
              </p>
            </div>
          </div>
        </a>

        {/* card 4 */}
        <a href="#" className=" flex-1 min-w-[300px] lg:max-w-[320px]">
          <div className="flex flex-col gap-5 m-2 p-2 rounded-lg h-full">
            <div className="text-6xl">
              <RiVideoFill />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl flex justify-between items-center">
                <span>
                  Webinars and workshops with registration and payment in one place
                </span>
                <IoMdArrowDropright className="text-2xl flex-shrink-0" />
              </h3>
              <p className="font-semibold text-left">
                Run webinars directly from your website. Set up a paid webinar and
                your customers can register straight from your Podia store.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Page2;
