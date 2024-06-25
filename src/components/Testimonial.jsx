import React from 'react'
import Slider from 'react-slick'



const settings = {
        dots: true,
         infinite: true,
         arrows: false,
         speed: 500,
         slidersToscroll: 1,
         autoplay: true,
         autoplayspeed:2000,
         cssEase: "Linear",
         pauseOnHover:true,
         pauseOnFocus: true,
         responsive: [
            {
            breakpoint: 10000,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
            },
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialslide: 2,
                },
                },
                {
                    breakpoint: 640,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                    },
         ]
}

const Testimonial = () => {
    const TestimonialData = [
        {
            id: 1,
            name:'victor',
            text: 'Loremipsum dolor sit amet, consectetur adipisicing elit. Magni, reprehenderit',
            img:"https://picsum.photos/101/101"
        },
        {
            id: 2,
            name:'victor',
            text: 'Loremipsum dolor sit amet, consectetur adipisicing elit. Magni, reprehenderit',
            img:"https://picsum.photos/102/102"
        },
        {
            id: 3,
            name:'victor',
            text: 'Loremipsum dolor sit amet, consectetur adipisicing elit. Magni, reprehenderit',
            img:"https://picsum.photos/102/102"
        },
        {
            id: 4,
            name:'victor',
            text: 'Loremipsum dolor sit amet, consectetur adipisicing elit. Magni, reprehenderit',
            img:"https://picsum.photos/104/104"
        },
    ]
    return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/*Header Section*/}
         <div className='text-center mb-10 max-w-[600px] mx-auto'>
         <p data-aos='fade-up' className=' text-sm text-purple-300'>What our customers are saying</p>
         <h1 className='text-3xl font-bold' data-aos='fade-up'>Testimonial</h1>
         <p data-aos='fade-up' className='text-xs text-gray-400'>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ad!
         </p>
       </div>
       {/*Testimonial Cards*/}
       <div
       data-aos='zoom-in'
       >
        <Slider {...settings}>{

            TestimonialData.map((data) =>(
                <div  className='my-5'>

                    <div 
                    key={data.id}
                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                      bg-purple-300/30 relative'
                   >
                        <div className='mb-4'> 
                            <img src={data.img} alt=""
                            className='rounded-full w-20 h-20'
                             />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>

                            <p className='text-xs text-gray-400'>
                                {data.text}
                            </p>
                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>
                                {
                                    data.name
                                }
                            </h1>
                            </div>
                        </div>
                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>“</p>
                    </div>
                </div>
            ))
        }
        </Slider>
       </div>
      </div>
    </div>
  )
}

export default Testimonial
