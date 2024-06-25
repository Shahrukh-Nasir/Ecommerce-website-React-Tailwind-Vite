import React from 'react'
import logo from '../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import {FaCaretDown, FaCartShopping} from "react-icons/fa6"


const menu =[
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 3,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 3,
        name: "Electronics",
        link: "/#",
    },
];

const Dropdownlinks = [{

    id: 1,
    name: "Trending Products",
    link: "/#",
},
{
    id: 2,
    name: "Best Selling",
    link: "/#",
},
{
    id: 3,
    name: "Top Rated",
    link: "/#",
},
];
const Navbar = () => {
  return (
    <div className=' shadow-md bg-white dark:bg-gray-900 duration-200 relative z-40'>
        {/*uppernavbar*/}
      <div className=' bg-purple-300 py-2'>
    <div className='container flex justify-between items-center'>
        <div>
            <a href="#" className=' font-bold text-2xl sm:text-3xl flex gap-2 items-center'>
                <img src={logo} className=' w-[45px]' alt="LOGO" />
                Sopsy
            </a>
        </div>
        <div className='group relative hidden sm:block'>
            <input type='text' placeholder='Search' className='w=[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-2  focus:border-purple-500'></input>
           {/*icon*/}
            <IoMdSearch className=" text-gray-500  group-hover:text-purple-400 absolute top-1/2  -translate-y-1/2 right-3" ></IoMdSearch>
        </div>
    <button onClick={() => {
        alert("Ordering not Available yet")
    }}
    className=' bg-gradient-to-r  from-purple-600   to-purple-400 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
    
    >
        
        <span className=' group-hover:block hidden transition-all duration-200'>
            Order Now
        </span>
        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'></FaCartShopping>
    </button>
    </div>
    {/*order button*/}
      </div>
              {/*lowernavbar*/}
      <div className='bg-white text-black flex justify-center'>
    <ul className=' sm:flex gap-3 hidden items-center'>
        {menu.map((data) => (
                <li key={data.id} className=' inline-block px-4 hover:text-purple-300 duration-200'>
                    <a href={data.link}>{data.name}</a>
                </li>
))}
<li className='group relative cursor-pointer'>
    <a href="#" className='flex items-center hover:text-purple-300'>
        Trending Products
    <span>
        <FaCaretDown className='transitiol-all duration-200 group-hover:rotate-180'></FaCaretDown>
    </span>
    </a>
    <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white text-black shadow-md'>
        <ul>
            {Dropdownlinks.map((data)=>(
                <li key={data.id}>
                    <a href={data.link}
                    className='inline-block w-full rounded-md p-2 hover:bg-purple-200'
                    >{data.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
</li>
    </ul>
      </div>

    </div>
  )
}

export default Navbar
