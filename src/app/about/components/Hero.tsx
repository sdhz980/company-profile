import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (


    <div className='flex flex-col items-center justify-center py-40 w-full gap-8'>

        <div className='px-20 md:w-[65%] flex flex-col md:gap-8 gap-4 items-center justify-center'>
            <h1 className='md:text-5xl text-center font-bold'>We help people become their best selves to create highly-engaged, high performing organizations, starting with ours.</h1>
            <Button className='bg-[#FFB353] rounded-full text-black'>View open positions</Button>
        </div>

        <div className='flex md:flex-row flex-col w-full gap-8 md:h-[20vw] px-8 justify-center'>
            <Image src='/employee1.jpg' alt='employee1' blurDataURL='data:...' placeholder='blur' loading='lazy' 
            quality={40} width={1500} height={1000} style={{ translate: "0px -10px" }} className='md:h-[60%] md:w-[100%] w-[70%] rounded-xl object-cover' />
            
            <Image src='/employee2.jpg' alt='employee1' blurDataURL='data:...' placeholder='blur' loading='lazy' 
            quality={40} width={1500} height={1000} style={{ translate: "0px -10px" }} className='md:h-[80%] md:w-[100%] w-[60%] rounded-xl object-cover self-end' />
            
            <Image src='/employee3.jpg' alt='employee1' blurDataURL='data:...' placeholder='blur' loading='lazy' 
            quality={40} width={1500} height={1000} style={{ translate: "0px 10px" }} className='md:h-[70%]  md:w-[100%] w-[80%] rounded-xl object-cover' />

        </div>

    </div>
  )
}

export default Hero