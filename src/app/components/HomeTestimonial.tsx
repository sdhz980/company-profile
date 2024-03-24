'use client'
import React , {useState} from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"

const HomeTestimonial = () => {
    const [hover,setHover] = useState(false)

  return (
    <div className={`flex md:px-[20%] px-5 md:py-[10%] py-5 items-center justify-center transition-all`}>
        <Carousel onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
            className="w-[60vw] max-w-2xl" plugins={ hover ? [] : [Autoplay({ delay:3000,stop:true })] }>
            <CarouselContent className="flex items-center">

                <CarouselItem>
                    <div className="flex flex-col text-center items-center justify-center">
                        <Quote className="mb-4" />
                        <p className="mb-8 md:text-2xl font-semibold">I LOVE Testimonial and so does our entire company! In just one month of being a customer, I've been thoroughly impressed by the speed of innovation and new features released. The team is constantly open to my feedback and not only listens to what I have to say but makes my ideas happen.</p>
                        <p className="font-semibold text-sm">Andrew Gazdecki</p>
                        <p className="text-xs">Founder and CEO of Acquire.com</p>
                    </div>
                </CarouselItem>
 
                <CarouselItem>
                    <div className="flex flex-col text-center items-center justify-center">
                        <Quote className="mb-4" />
                        <p className="mb-8 md:text-2xl font-semibold">Testimonial.to has helped us seamlessly integrating tweets from Twitter into our Wall of Love. It allows us to showcase authentic testimonials and amplify our credibility as a trusted partner in helping startups get acquired. Testimonial.to has truly transformed our community building efforts and continues to drive new leads to our business.</p>
                        <p className="font-semibold text-sm">Andrew Gazdecki</p>
                        <p className="text-xs">Founder and CEO of Acquire.com</p>
                    </div>
                </CarouselItem>
 
                <CarouselItem>
                    <div className="flex flex-col text-center items-center justify-center">
                        <Quote className="mb-4" />
                        <p className="mb-8 md:text-2xl font-semibold">I've been using testimonial.tolast few weeks and I absolutely LOVE it❤️ Once you start, you understand how it boosts your social proof. Worth every penny.Thanks @damengchen for building it 🙏</p>
                        <p className="font-semibold text-sm">Andrew Gazdecki</p>
                        <p className="text-xs">Founder and CEO of Acquire.com</p>
                    </div>
                </CarouselItem>

            </CarouselContent>

            <CarouselPrevious className="bg-transparent border-black"/>
            <CarouselNext className="bg-transparent border-black"/>
        </Carousel>
    </div>
  )
}

export default HomeTestimonial