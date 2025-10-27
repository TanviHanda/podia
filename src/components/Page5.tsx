import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

const Page5 = () => {
  return (
    <section>
        <div className=' lg:p-0 flex flex-col-reverse gap-4 bg-[#DDE7F0] lg:flex-row items-center justify-center'>
            <div>
                <img src="amy-leblanc-removebg-preview.png" alt="Amy Leblanc" width={1366} height={1792}/>
            </div>
            <div className='flex flex-col gap-4 lg:p-15 p-4'>
                <div>
                    <h1 className='font-bold text-2xl lg:text-4xl'>"I love Podia because it has the absolute best user experience for my students and customers. I get compliments on it all the time!"</h1>
                </div>
                <div>
                    <p className='text-xl'> More than 150,000 entrepreneurs — including creators, coaches, consultants, and many more — grow their business on Podia. See how easy selling online can be.</p>
                </div>
                <div className='text-xl font-bold'>
                    <div>
                    Levee Road Studio
                </div>
                    <div>Amy LeBlanc</div>
                </div>
                <a href="#" className='flex items-center bg-black w-fit text-white rounded-xl p-3 gap-1 hover:bg-from-white to gray to black lg:text-xl'>Start your free trial <IoMdArrowDropright/></a>
              
            </div>
        </div>
    </section>
  )
}

export default Page5