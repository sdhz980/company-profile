import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (


    <div className='flex flex-col items-center justify-center py-40 w-full gap-8'>

        <div className='px-20 md:w-[65%] flex flex-col md:gap-8 gap-4 items-center justify-center'>
            <h1 className='md:text-5xl text-center font-bold'>We help people become their best selves to create highly-engaged, high performing organizations, starting with ours.</h1>
            <Button className='bg-[#FFB353] rounded-full text-black'>View open positions</Button>
        </div>

        <div className='flex md:flex-row flex-col w-full gap-8 md:h-[20vw] px-8 justify-center'>
            <img style={{ translate: "0px -10px" }} className='md:h-[60%] md:w-[100%] w-[70%] rounded-xl object-cover' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
            <img style={{ translate: "0px -10px" }} className='md:h-[80%] md:w-[100%] w-[60%] rounded-xl object-cover self-end' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
            <img style={{ translate: "0px 10px" }} className='md:h-[70%]  md:w-[100%] w-[80%] rounded-xl object-cover' src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
        </div>

    </div>
  )
}

export default Hero