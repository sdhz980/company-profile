import Image from 'next/image'
import React from 'react'

const HomeTagline = () => {
  return (
    <div className='flex flex-wrap px-[7%] py-[7%] items-center justify-center gap-10'>

        <div className='flex flex-wrap px-[15%] justify-center text-center'>
            <h1 className='font-bold text-4xl'>Be fast and friendly</h1>
            <p>Oval Supports puts all your customer support interactions in one place, so communication is seamless, personal, and efficient</p>
        </div>

        <div className='flex md:flex-row flex-col gap-10'>

            <div className='flex flex-col items-center gap-4 h-[200px] w-[300px]'>

                <Image src="/smile.svg" alt='smile' width={1000} height={1000} className='h-[60px]' />

                <h2 className="text-md font-bold text-center">Lead customers to happiness</h2>

                <p className="text-xs text-center">Oval support helps you provide presonalized support when and where customer need it, so customers stay happy</p>

            </div>

            <div className='flex flex-col items-center gap-4 h-[200px] w-[300px]'>

                <Image src="/laptop.svg" alt='smile' width={1000} height={1000} className='h-[60px]' />

                <h2 className='font-bold text-md text-center'>Support your support</h2>
                <p className='text-xs text-center'>Productive agents are happy agents, Give them all the support tools and information they need to best serve your customers.</p>

            </div>
            
            <div className='flex flex-col items-center gap-4 h-[200px] w-[300px]'>

                <Image src="/plant.svg" alt='smile' width={1000} height={1000} className='h-[60px]' />
                
                <h2 className='text-md font-bold text-center'>Grow without growing pains</h2>
                <p className='text-xs text-center'>Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow</p>

            </div>
            
        </div>

    </div>
  )
}

export default HomeTagline