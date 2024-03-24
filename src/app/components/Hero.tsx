'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Hero = () => {

  return (
    <div className='bg-[#6000C4] h-full w-full px-32 py-56'>

        <div className='flex flex-col gap-6'>

            <h2 style={{lineHeight : "100%"}} className='text-[48px] w-[60vw] font-bold text-[#FFEFDB]'>Connect to your customer in a whole new way with the world's #1 CRM platforms.</h2>
            
            <div className='flex flex-col font-medium text-[#FFEFDB]'>
                <p>An awesome & powerfull tools for your business, increase business revenue</p>
                <p>with enterprise-grade links built to acquire and engage customers</p>
            </div>

            <div className='flex py-8 gap-10'>

                <button className='rounded-full px-10 py-4 font-semibold bg-[#FFB353]'>Get Started</button>
                <button style={{boxShadow : "0px 0px 0px 2px #FFB353"}} 
                        className='rounded-full px-10 py-4 font-semibold text-[#FFEFDB]'>Watch Demo</button>

            </div>

        </div>
       
    </div>
  
    )
}

export default Hero