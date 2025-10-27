import React from 'react';

const Page9 = () => {
  return (
    <section>
      <div className='bg-[#DDE7F0] min-h-screen flex justify-center items-center p-8 sm:p-20 relative overflow-hidden'>
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-[#B9CAD8] rounded-2xl opacity-60"></div>
        
        <div className="absolute top-16 right-1/4 w-12 h-12 bg-[#2D334E] rounded-md rotate-45"></div>

        <div className="absolute top-1/2 left-12 sm:left-40 w-24 h-24 bg-[#2D334E] rounded-3xl -rotate-45"></div>
        
        <div className="absolute top-1/3 right-10 sm:right-52 w-16 h-16 bg-white rounded-lg opacity-80"></div>

        <div className="absolute bottom-10 left-5 w-10 h-10 bg-white rounded-full opacity-70"></div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-md"></div>
        
        <div className="absolute bottom-8 right-1/6 w-16 h-16 bg-[#2D334E] rounded-full"></div>

        <div className='bg-white rounded-3xl shadow-lg flex flex-col p-8 sm:p-12 justify-center items-center w-full max-w-2xl text-center relative z-10'>
          
          <h1 className='text-3xl font-bold lg:text-4xl text-gray-900'>
            Try Podia free for 30 days
          </h1>
          
          <p className='text-lg font-medium text-gray-600 mt-4 max-w-md mx-auto'>
            Join thousands of creators just like you who use Podia to create websites, sell digital products, send great emails, and build online businesses.
          </p>
          
          <a 
            href="#" 
            className='bg-gray-900 text-white py-3 px-6 rounded-lg mt-8 inline-block font-semibold hover:bg-gray-700 transition-colors'
          >
            Start your free trial
          </a>
        </div>

      </div>
    </section>
  );
}

export default Page9;