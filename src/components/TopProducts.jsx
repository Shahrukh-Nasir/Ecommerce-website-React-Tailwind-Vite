import React from 'react'
import Img1 from '../assets/Shirts/casualshirts.png'
import Img2 from '../assets/Shirts/printedshirts.png'
import Img3 from '../assets/Shirts/womenshirts.png'
import { FaStar, FaV } from 'react-icons/fa6'


const ProductsData =[
    {
        
            id: 1,
            img: Img1,
            title: "Casual Wear",
            description: "Lorem ipsum dolor sit amet."
            },
            {
                id: 2,
                img: Img2,
                title: "Printed Shirts",
                description: "Lorem ipsum dolor sit amet."

            },
            {
                id: 3,
                img: Img3,
                title: "Women Shirt",
                description: "Lorem ipsum dolor sit amet."

            }
    
];

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/*Header section*/}
            <div className='text-left mb-24 '>
        <p data-aos='fade-up' className=' text-sm text-purple-300'>Top Rated Products For You</p>
        <h1 className='text-3xl font-bold' data-aos='fade-up'>Best Products</h1>
        <p data-aos='fade-up' className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ad!
        </p>
      </div>
            {/*Body section*/}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data)=>(
                        <div 
                        data-aos="zoom-in"
                        className='rounded-2xl bg-white hover:bg-purple-200/80 relative shadow-xl duration-300 group max-w-[300px]'>
                            {/*Image Section*/}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" 
                                className='max-w-[240px] block mx-auto trasform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                
                                />
                                </div>
                                <div>
                                    {/*Details Section*/}
                                    <div className='p-4 text-center'>
                                        {/*star Rating*/}
                                        <div className='w-full items-center justify-center gap-1 flex'>
                                            <FaStar className='text-yellow-300'></FaStar>
                                            <FaStar className='text-yellow-300'></FaStar>
                                            <FaStar className='text-yellow-300'></FaStar>
                                            <FaStar className='text-yellow-300' ></FaStar>
                                        </div>
                                            <h1 className='font-bold '>{data.title}</h1>
                                            <p>{data.description}</p>
                                            <button className='text-white bg-gradient-to-r  from-purple-600 py-1 px-4 mt-4 to-purple-400 rounded-full hover:scale-105 duration-200'>
                                                Order Now
                                            </button>
                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts
