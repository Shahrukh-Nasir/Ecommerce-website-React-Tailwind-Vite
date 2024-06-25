import React from 'react'
import footerlogo from '../assets/logo.png'
import Banner from '../assets/footer.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaTwitter } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height: "100%",
    width: "100%",
}

 const Footerlinks =[
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    }
 ]
const Footer = () => {
  return (
    <div style={BannerImg}
    className='text-white mb-20'>
      <div className='container'>
    <div 
    data-aos="zoom-in"
    className='grid md:grid-cols-3 pb-44 pt-5'>
    {/* Company Details*/}
    <div className='py-8 px-4'>
    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
        <img src={footerlogo} alt="" 
        className='max-w-[80px]'
        />
        Shopsy
    </h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum provident nobis tempore! Quos accusamus debitis quas ipsa consectetur adipisci.
    </p>
    </div>
        {/* Footer Links*/}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
            <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-jusify mb-3'>
                    Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                    {
                        Footerlinks.map((link)=>(
                            <li className='cursor-pointer hover:text-purple-500 hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                <span>
                                    {link.title}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
                </div>
                
                {/*Social Links*/}
                <div>
                    <div className='flex items-center mt-6 gap-3'>
                        <a href="#">
                            <FaInstagram className='text-3xl'></FaInstagram>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl'></FaFacebook>
                        </a>
                        <a href="#">
                            <FaTwitter className='text-3xl'></FaTwitter>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl'></FaLinkedin>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow className='text-2xl'>
                            </FaLocationArrow>
                                <p className='mt-3'>
                                    123, Street Name, City, State, Country
                                </p>
                        </div>
                        <div className='flex gap-3 items-center mt-3'>
                            <FaMobileAlt className='text-2xl'></FaMobileAlt>
                            <p>+4922434894</p>
                        </div>

                    </div>
                </div>
            </div>
    </div>
      </div>
    </div>
  )
}

export default Footer
