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
                        <Image src='/overview.avif' alt='overview' width={1000} height={1000} loading='lazy' placeholder='blur' blurDataURL='data:...' quality={80} className='h-[20vh] w-[100%] object-cover rounded-2xl'/>
                    </div>
            </div>

            {/* <div className='flex flex-col gap-8 items-center justify-center'>
                <h1 className='text-4xl font-semibold'>Our Benefit</h1>
                <p className='w-[55%] text-center'>Working at Oval means working with people who cares about your whole person. We support your well-being both at work and outside of it.</p>
            </div>

            <div className='grid grid-cols-1 items-center w-[40%] gap-4'> 
            

                <div style={{minHeight: "150px"}} className='flex flex-row justify-around p-4 bg-blue-400 rounded-xl'>
                    <h1 className='text-xl font-semibold'>Your Health</h1>
                    <div>
                        <ul className='text-sm list-disc'>
                            <li>Medical, dental, vision</li>
                            <li>Fertility consulting assistance</li>
                            <li>24/7 online therapy assistance</li>
                            <li>Physical wellness online coaching</li>
                        </ul>
                    </div>
                </div>

                <div style={{minHeight: "150px"}} className='flex flex-row justify-around p-4 bg-blue-400 rounded-xl'>
                    <h1 className='text-xl font-semibold'>Your Future</h1>
                    <div>
                        <ul className='text-sm list-disc'>
                            <li>401K with 4% Matching</li>
                        </ul>
                    </div>
                </div>

                <div style={{minHeight: "150px"}} className='flex flex-row justify-around p-4 bg-blue-400 rounded-xl'>
                    <h1 className='text-xl font-semibold'>Your Life</h1>
                    <div>
                        <ul className='text-sm list-disc'>
                            <li>Flexible time off</li>
                            <li>Up to 16 weeks parental leave</li>
                            <li>Military leave</li>
                        </ul>
                    </div>
                </div>

                <div style={{minHeight: "150px"}} className='flex flex-row justify-around p-4 bg-blue-400 rounded-xl'>
                    <h1 className='text-xl font-semibold'>Your Work Life</h1>
                    <div>
                        <ul className='text-sm list-disc'>
                            <li>Flexible work arrangements</li>
                            <li>Developing your Best Self</li>
                            <li>Tools and Technology</li>
                        </ul>
                    </div>
                </div>

            </div> */}
    
    </div>

  )
}

export default Overview