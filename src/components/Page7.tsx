import React from 'react'
import { BsCheck } from 'react-icons/bs'
const Page7 = () => {
  return (
    <section>
      <div className='flex flex-col lg:flex-row gap-10 lg:pl-10 lg:pr-10 pt-35 pb-35 p-8 bg-[#DDE7F0]'>
        <div className='flex flex-col gap-2 '>
        <h2 className='font-bold text-2xl lg:text-4xl'>Turn your fans and customers into salespeople</h2>
        <p className='text-lg'>Affiliate marketing is built right into Podia and works with all product types, no third-party integrations required.</p>
      </div>
      <div>
        <ul className='flex flex-col gap-8'>
            <li className='flex flex-col gap-4'>
                <h1 className='flex items-center gap-4 text-2xl font-bold lg:text-3xl'><BsCheck className="lg:w-8 lg:h-8 text-black w-8 h-8 bg-gray-200 rounded-[5px]" />Your program, your terms</h1>
                <p className='text-lg font-semibold lg:text-2xl pl-12'>Set custom commission amounts for any product, or use a default site-wide commission structure.</p>
            </li>
            <li className='flex flex-col gap-4'>
                <h1 className='flex items-center gap-4 text-2xl font-bold lg:text-3xl'><BsCheck className="lg:w-8 lg:h-8 text-black w-8 h-8 bg-gray-200 rounded-[5px]" />Public or private</h1>
                <p className='text-lg font-semibold lg:text-2xl pl-12'>Let any customer sign up, or keep your affiliate program invite-only. You have full control over how you run your affiliate marketing.</p>
            </li>
            <li className='flex flex-col gap-4'>
                <h1 className='flex items-center gap-4 text-2xl font-bold lg:text-3xl'><BsCheck className="lg:w-8 lg:h-8 text-black w-8 h-8 bg-gray-200 rounded-[5px]" />Payouts made easy</h1>
                <p className='text-lg font-semibold lg:text-2xl pl-12'>We’ll do the math for you every month and tell you who's owed what, so payouts are fast and simple.</p>
            </li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default Page7