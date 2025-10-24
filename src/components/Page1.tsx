import React from "react";

const Page1 = () => {
  return (
    <section className="py-12 px-6 lg:py-24 bg-[#DDE7F0]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* ---------- TEXT SECTION ---------- */}
        <div className="lg:w-1/2 flex flex-col gap-5 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            An online store that makes selling easy
          </h1>

          <p className="text-lg text-gray-700">
            Sell anything from your Podia store. Upload your content and leave
            the hosting, checkout, and delivery to us.
          </p>

          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            aria-label="Start your free online store"
          >
            Get your free online store
          </a>
        </div>

        {/* ---------- VIDEO SECTION ---------- */}
        <div className="lg:w-1/2 relative flex items-center justify-center">
          <video
            src="https://videos.ctfassets.net/svo3kge9wizu/NqB1bFrqGOS6a11CQCcqz/ec81ea5e8e3730e3e2fc0f192ad7b9b7/online-store-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-lg rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Page1;
