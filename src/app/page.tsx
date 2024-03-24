'use client'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeTagline from "./components/HomeTagline";
import HomeOverview from "./components/HomeOverview";
import ProductOverview from "./components/ProductOverview";
import HomeRating from "./components/HomeRating";
import HomeTestimonial from "./components/HomeTestimonial";
import HomeServicesPrice from "./components/HomeServicesPrice";
import Footer from "./components/Footer";


export default function Home() {
  const [active ,setActive] = useState(false);


  return (
    <>
    
        <Navbar/>

            <section className="h-[720px]"> <Hero/> </section>
            <section className="bg-[#fcf9f6]"> <HomeTagline/> </section>
            <section className="bg-[#fcf9f6]"> <HomeOverview/> </section>
            <section className="bg-[#fcf9f6]"> <ProductOverview/> </section>
            <section className="bg-[#ffefdb]"> <HomeRating/> </section>
            <section className="bg-[#ffc67e]"> <HomeTestimonial/> </section>
            <section className="bg-[#fcf9f6]"> <HomeServicesPrice/> </section>
            <section className="bg-[#fcf9f6]">   </section>

        {/* <Footer/> */}

    </>
  );
}



