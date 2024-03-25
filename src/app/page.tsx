import { lazy } from "react";
import Hero from "./components/Hero";
import HomeTagline from "./components/HomeTagline";
import HomeOverview from "./components/HomeOverview";


export default function Home() {
  const ServicePriceComponent = lazy(() => import('./components/HomeServicesPrice'))
  const TestiComponent = lazy(() => import('./components/HomeTestimonial'))
  const RatingComponent = lazy(() => import('./components/HomeRating'))
  const ProductOverviewComponent = lazy(() => import('./components/ProductOverview'))

  return (
    <>

            <section className=""> <Hero/> </section>
            <section className="bg-[#fcf9f6]"> <HomeTagline/> </section>
            <section className="bg-[#fcf9f6]"> <HomeOverview/> </section>
            <section className="bg-[#fcf9f6]"> <ProductOverviewComponent/> </section>
            <section className="bg-[#ffefdb]"> <RatingComponent/> </section>
            <section className="bg-[#ffc67e]"> <TestiComponent/> </section>
            <section className="bg-[#fcf9f6]"> <ServicePriceComponent/> </section>
            <section className="bg-[#fcf9f6]">   </section>

    </>
  );
}



