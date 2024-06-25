import React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Hero/Herosection';
import Products from './components/Products';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts';
import Banner from './components/Banner';
import Subscribe from './components/Subscribe';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';


export default function App() {
  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Products></Products>
      <TopProducts></TopProducts>
      <Banner></Banner>
      <Subscribe></Subscribe>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}
