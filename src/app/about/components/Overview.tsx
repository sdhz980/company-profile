import Image from 'next/image'
import React from 'react'

const Overview = () => {
  return (

    <div className='md:px-40 px-8 py-20 flex flex-col gap-44'>
            
            <div className='flex md:flex-row flex-col gap-8'>
                    
                    <div className='flex mt-8 gap-2 flex-col md:text-left text-center md:w-[35%]'>
                        <h1 className='text-xl text-purple-700 font-bold'>Why work at Oval?</h1>
                        <h2 className='text-4xl font-bold'>Why join us?</h2>
                        <p className='text-md'>A career at Oval is more than a job. Our culture embraces personal and professional growth, empowering you to be your best and to bring your whole self to work.</p>
                    </div>

                    <div className='grow'>
                        <Image src='/overview.avif' alt='overview' width={1000} height={1000} loading='lazy' placeholder='blur' blurDataURL='data:...' quality={40} className='h-[20vh] w-[100%] object-cover rounded-2xl'/>
                    </div>
            </div>
    
    </div>

  )
}

export default Overview