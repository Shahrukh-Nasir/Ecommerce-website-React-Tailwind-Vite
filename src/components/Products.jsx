import React from 'react'
import Img1 from '../assets/Women/women1.jpg'
import Img2 from '../assets/Women/women2.jpg'
import Img3 from '../assets/Women/women3.jpg'
import Img4 from '../assets/Women/women4.jpg'
import Img5 from '../assets/Women/women5.jpg'
import { FaStar } from 'react-icons/fa6'
import Aos from 'aos'



    const ProductsData = [
        {
            id: 1,
            img: Img1,
            title: "Womens Ethinic",
            rating:"5.0",
            color: "white",
            aosDealy: "0"
            },
            {
                id: 2,
                img: Img2,
                title: "Womens Ethinic",
                rating:"5.0",
                color: "Red",
                aosDealy: "0"
            },
            {
                id: 3,
                img: Img3,
                title: "Womens Ethinic",
                rating:"5.0",
                color: "Brown",
                aosDealy: "0"
            },
            {
                id: 4,
                img: Img4,
                title: "Womens Ethinic",
                rating:"5.0",
                color: "white",
                aosDealy: "0"
            },
            {
                id: 5,
                img: Img5,
                title: "Womens Ethinic",
                rating:"5.0",
                color: "white",
                aosDealy: "0"
            }
        ];
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
      {/*Header Section*/}
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
        <p data-aos='fade-up' className=' text-sm text-purple-300'>Top Selling Products For You</p>
        <h1 className='text-3xl font-bold' data-aos='fade-up'>Products</h1>
        <p data-aos='fade-up' className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ad!
        </p>
      </div>
      {/*Body Section*/}
            <div className='grid frid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {/*Card Section*/}
                {ProductsData.map((data)=>(
                    <div
                    data-aos-="fade-up"
                    data-aos-delay = {data.aosDealy}
                    key={data.id}
                    className='space-y-3'
                    >
                        <img src={data.img} alt="" 
                        className='h-[220px] w-[150px] object-cover rounded-md'
                        />
                        <div>
                            <h3 className='font-semibold' >
                                {data.title}
                            </h3>
                            <p className='text-sm text-gray-600'>
                                {data.color}
                            </p>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-purple-300'></FaStar>
                                {data.rating}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Products
