import Image from 'next/image'
import React from 'react'

const ProductOverview = () => {
  return (
    <div className='flex flex-col px-[7%] py-[7%] gap-10'>
        
        <div className='flex flex-col gap-8 items-center text-center'>
            <div className='flex items-center md:text-4xl text-2xl font-bold'>
                <h1>Explore all the solutions on the Oval Customer 360 Platform.</h1>
            </div>
            <p className='text-md'>We're the innovative company behind the world's #1 CRM platform that employees can access entirely over the internet - there's no infrastructur to buy, set up, or manage - you just log in and get to work.</p>
        </div>

        <div className='mt-[4%] grid md:grid-cols-2 gap-8 w-full'>
            
            <div className='grid grid-flow-col items-center px-4 py-4 pr-20 bg-white gap-4 rounded-lg'>

                <Image className='w-[50px]' src="/merchant.svg" alt='merchant' width={1000} height={1000} />

                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold'>Small Business</h2>
                    <p className='text-sm'>Find, win, and keep more customers using the CRM that grows with you.</p>
                </div>

            </div>

            <div className='grid grid-flow-col items-center  px-4 py-4 pr-20 bg-white gap-4 rounded-lg'>

                <Image className='w-[50px]' src="/statistic.svg" alt='merchant' width={1000} height={1000} />

                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold'>Sales</h2>
                    <p className='text-sm'>Sell faster and smarter with the worlds #1 sales platform.</p>
                </div>

            </div>

            <div className='grid grid-flow-col items-center  px-4 py-4 pr-20 bg-white gap-4 rounded-lg'>

                <Image className='w-[50px]' src="/service.svg" alt='merchant' width={1000} height={1000} />

                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold'>Service</h2>
                    <p className='text-sm'>Manage customer support across every channel with the #1 service platform.</p>
                </div>

            </div>

            <div className='grid grid-flow-col items-center  px-4 py-4 pr-20 bg-white gap-4 rounded-lg'>

                <Image className='w-[50px]' src="/megaphone.svg" alt='merchant' width={1000} height={1000} />

                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold'>Marketing</h2>
                    <p className='text-sm'>Know your customer personalise using AI, and engage across every interaction.</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default ProductOverview