import React from 'react'
import { IoEyeOutline } from "react-icons/io5";

const ExploreNFT = ({data}) => {

   const{ title, subtitle,  cards }  = data

  return (
    <section className='relative flex flex-col md:items-start items-center text-white overflow-hidden '>
      <div className='flex justify-between order-1 mb-12.5 w-full'>
        <div className='flex flex-col xl:gap-4 gap-2'>
          <h1 className='flex xl:text-4xl lg:text-3xl text-2xl font-roboto xl:font-bold'>{title}</h1>
          <h2 className='xl:text-xl text-neutral-200 font-bold font-lato'>{subtitle}</h2>
        </div>
            <button

             className='hidden lg:flex justify-center items-center w-50 h-16 font-lato font-extrabold tracking-wider rounded-3xl border-2 border-purple-500 mt-6 gap-3.5 transform transition-transform duration-500 hover:scale-95'> <span className="text-xl text-purple-500"><IoEyeOutline /></span> See</button>
      </div>
      <section className='relative order-2 grid lg:grid-cols-3 grid-col-1 md:items-start items-center w-full gap-7 '>
        {
          cards.map(({img_url, author:{title, avatar,name}, price, highestBid,},index) =>(
            <section key={index} className={`relative flex flex-col sm:w-85 w-75 h-auto shadow-lg rounded-3xl pb-4 bg-neutral-700 transform transition-transform duration-500 hover:scale-95  ${index === 2 ? "lg:hidden xl:flex" : ""}`}>
              <img src={img_url} alt={title} className='w-full h-72 object-cover rounded-t-3xl' />
              <div className='relative flex flex-col items-start gap-2 pt-3 pl-8 '>
                <h1 className='text-2xl font-roboto font-bold '>{title}</h1>
                <div className='flex items-center  gap-3'>
                  <img src={avatar} alt= {name} className=' w-7 h-7 rounded-full object-cover'/>
                  <h1 className='font-roboto'>{name}</h1>
                </div>
                <div className='flex gap-30 pt-3'>
                  <div className='flex flex-col gap-3'>
                    <p className='text-sm text-gray-500'>Price</p>
                  <strong className='text-white font-jetbrainsmomo font-bold'>{price}</strong>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <p className='text-sm text-gray-500'>Highest Bid</p>
                  <strong className='text-white font-jetbrainsmomo font-bold'>
                    {highestBid}
                  </strong>
                  </div>
                </div>
              </div>
            </section>
          ))
        }
      </section>
      <button
             className='order-3 lg:hidden sm:w-85 w-78 h-14 sm:h-16 font-lato font-extrabold tracking-wider rounded-3xl border-2 border-purple-500 mt-6 gap-3.5 transform transition-transform duration-500 hover:scale-95'> <span className="text-xl text-purple-500"><IoEyeOutline /></span>See</button>
             
    </section>
  )
}

export default ExploreNFT
