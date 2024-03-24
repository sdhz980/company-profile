import React from 'react'

const Hero = () => {

  return (
    <div className='bg-[#6000C4] h-full w-full md:px-32 md:py-56 px-10 py-24'>

        <div className='flex flex-col md:gap-6 gap-8'>

            <h2 style={{lineHeight : "100%"}} className='md:text-[48px] text-3xl w-[60vw] font-bold text-[#FFEFDB]'>Connect to your customer in a whole new way with the world's #1 CRM platforms.</h2>
            
            <div className='flex flex-col font-medium text-[#FFEFDB]'>
                <p>An awesome & powerfull tools for your business, increase business revenue</p>
                <p>with enterprise-grade links built to acquire and engage customers</p>
            </div>

            <div className='flex md:flex-row flex-col py-8 gap-10'>

                <button className='rounded-full md:px-10 py-4 text-sm font-semibold bg-[#FFB353]'>Get Started</button>
                <button style={{boxShadow : "0px 0px 0px 2px #FFB353"}} 
                        className='rounded-full md:px-10 py-4 font-semibold text-[#FFEFDB]'>Watch Demo</button>

            </div>

        </div>
       
    </div>
  
    )
}

export default Hero