import React from 'react'
import BannerImg from '../assets/Women/women5.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            {/*Image Section*/}
            <div data-aos='zoom-in'>
                <img src={BannerImg} alt="" 
                className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgb(0,0,0,1)] object-cover'
                />
            </div>
            {/*Text Section*/}
            <div className='flex flex-col justify-center gap-6  sm:pt-0'>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    Winter Sale upto 20% Off
                </h1>
                <p  data-aos='fade-up' className='text-sm text-gray-500 tracking-wide leading-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nulla!
                </p>
                <div data-aos='fade-up' className=' flex items-center gap-4'>
                    <GrSecure
                    className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-purple-400/30'
                    ></GrSecure>
                    <p>Quality Products</p>
                </div>
                    <div data-aos='fade-up' className='flex items-center gap-4'>
                        <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400-30'></IoFastFood>
                        Fast Delivery
                    </div>
                    <div  data-aos='fade-up' className='flex items-center gap-4'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400/30'></GiFoodTruck>
                        Easy Payment Method
                    </div>
                    <div  data-aos='fade-up' className='flex items-center gap-4'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-yellow-400/30'></GiFoodTruck>
                        Get Offers
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
