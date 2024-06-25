import React from 'react'
import Banner from '../assets/Banner/banner.jpg'

const BannerImg = {
        backgroundImage: `url(${Banner})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
}
const Subscribe = () => {
  return (
    <div className='bg-gray-100 mb-20 dark:bg-gray-800 text-white' style={BannerImg}>

        <div className='container backdrop-blur-sm py-10'>
      <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl sm:text-left sm:text-4xl font-semibold !text-center'>
                Get Notified About New Products
            </h1>
            <input
            data-aos='fade-up'
            type='text'
            placeholder='Enter your Email'
            className='w-full p-3'
            >
            </input>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
