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
            
            <div className='grid grid-flow-col px-4 py-4 pr-20 bg-white gap-4 rounded-lg'>
                <svg fill="#000000" width="50px" height="80px" viewBox="0 0 24 24" id="Main" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path><path d="M10.49,10H15a1,1,0,0,0,0-2H13V7a1,1,0,0,0-2,0V8h-.51a2.5,2.5,0,0,0,0,5h3a.5.5,0,0,1,0,1H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V16h.51a2.5,2.5,0,0,0,0-5h-3a.5.5,0,0,1,0-1Z"></path></g></svg>

                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold'>Small Business</h2>
                    <p className='text-sm'>Find, win, and keep more customers using the CRM that grows with you.</p>
                </div>

            </div>

            <div className='grid grid-flow-col px-4 py-4 pr-20 bg-white gap-4 rounded-lg'>
                <svg fill="#000000" width="50px" height="80px" viewBox="0 0 24 24" id="Main" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path><path d="M10.49,10H15a1,1,0,0,0,0-2H13V7a1,1,0,0,0-2,0V8h-.51a2.5,2.5,0,0,0,0,5h3a.5.5,0,0,1,0,1H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V16h.51a2.5,2.5,0,0,0,0-5h-3a.5.5,0,0,1,0-1Z"></path></g></svg>

                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold'>Sales</h2>
                    <p className='text-sm'>Sell faster and smarter with the worlds #1 sales platform.</p>
                </div>

            </div>

            <div className='grid grid-flow-col px-4 py-4 pr-20 bg-white gap-4 rounded-lg'>
                <svg fill="#000000" width="50px" height="80px" viewBox="0 0 24 24" id="Main" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path><path d="M10.49,10H15a1,1,0,0,0,0-2H13V7a1,1,0,0,0-2,0V8h-.51a2.5,2.5,0,0,0,0,5h3a.5.5,0,0,1,0,1H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V16h.51a2.5,2.5,0,0,0,0-5h-3a.5.5,0,0,1,0-1Z"></path></g></svg>

                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold'>Service</h2>
                    <p className='text-sm'>Manage customer support across every channel with the #1 service platform.</p>
                </div>

            </div>

            <div className='grid grid-flow-col px-4 py-4 pr-20 bg-white gap-4 rounded-lg'>
                <svg fill="#000000" width="50px" height="80px" viewBox="0 0 24 24" id="Main" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path><path d="M10.49,10H15a1,1,0,0,0,0-2H13V7a1,1,0,0,0-2,0V8h-.51a2.5,2.5,0,0,0,0,5h3a.5.5,0,0,1,0,1H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V16h.51a2.5,2.5,0,0,0,0-5h-3a.5.5,0,0,1,0-1Z"></path></g></svg>

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