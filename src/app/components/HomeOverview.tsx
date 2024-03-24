import React from 'react'

const HomeOverview = () => {
  return (
    <div className='flex items-center flex-col px-[7%] py-[7%] gap-10'>
        <div className='flex flex-col items-center gap-6 text-center'>
            <div className='md:w-[40%]'>
                <h1 className='font-bold text-3xl tracking-wide'>Make it easy to manage customer interactions</h1>
            </div>
            
            <div className='w-[60%]'>
                <p className='text-sm'>Oval is intuitive, and it's built with support agents in mind. Everything they need lives in a single, dynamic help desk interface so it's easy to be productive and manage customer interactions.</p>
            </div>
        </div>
        <img src="/chart.png" alt="" width="100%"/>
    </div>
  )
}

export default HomeOverview