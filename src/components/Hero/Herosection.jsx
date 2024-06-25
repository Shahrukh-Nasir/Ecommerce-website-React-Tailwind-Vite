import React from 'react'
import image1 from "../../assets/Hero/sales.png"
import image2 from "../../assets/Hero/shopping.png"
import image3 from "../../assets/Hero/people.png"
import Slider from "react-slick"



const Imagesection = [
    {
        id: 1,
        img: image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magnam beatae eligendi labore maxime debitis? Eaque ipsum quod optio, a autem nobis fuga magnam iste eum quae recusandae distinctio rem."

    },
    {
        id: 1,
        img: image2,
        title: "Upto 50% off on all Women's Wear",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magnam beatae eligendi labore maxime debitis? Eaque ipsum quod optio, a autem nobis fuga magnam iste eum quae recusandae distinctio rem."

    },
    {
        id: 1,
        img: image3,
        title: "Upto 70% Off On All Products",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magnam beatae eligendi labore maxime debitis? Eaque ipsum quod optio, a autem nobis fuga magnam iste eum quae recusandae distinctio rem."

    },
]

var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    SlideToscroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    CssEase:"ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
};

const Herosection = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]  flex justify-center items-center  dark:text-white duration-200'>
        {/*Background pattern*/}
      <div className='h-[700px] w-[700px] bg-purple-300/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

      </div>
      {/*Hero Section*/}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
            {Imagesection.map((data)=>(
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text ontent ction*/}
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2  sm:order-1 relative z-10'>
            <h1 data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-once="true"
            className=' text-black text-5xl sm:text-6xl lg:text-7xl font-bold'>
                {data.title}
            </h1>
            <p data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay="100"
             className='text-black text-sm'>
                {data.description}
            </p>
            <div data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-once="true"
            >
                <button className='text-white bg-gradient-to-r  from-purple-600   to-purple-400 rounded-full hover:scale-105 duration-200 py-2 px-4'>
                    Order Now
                </button>
            </div>
            </div>
            {/*image section*/}
            <div className='order-1 sm:order-2'>
                <div data-aos="zoom-in"
                data-aos-once="true"
                className='relative z-10'>

                    <img src={data.img} alt="" 
                    className='w-[300px] h-[300px] sm:h-[450px] sm:scale-125 object-contain lg:scale-120 mx-auto'
                    />
                </div>
            </div>
            </div>
        </div>
            ))}
                
         </Slider>

      </div>
    </div>
  )
}

export default Herosection
