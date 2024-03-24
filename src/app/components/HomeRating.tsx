import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HomeRating = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 px-[7%] py-[7%]'>
        <h1 className='text-4xl font-bold'>Over 3,000 reviews & ratings</h1>
        <p>Highly rated by thousands of customers all over the world</p>

        <div className='grid md:grid-cols-6 grid-cols-2 md:gap-20 gap-10 mt-4'>
            

                <div className='flex flex-col items-center justify-center'>
                    <Image className='w-14' src="/facebook.svg" alt='facebook' placeholder='blur' blurDataURL='data:...' width={1000} height={1000} quality={80} loading='lazy'/>
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,5/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image className='w-14' src="/pinterest.svg" alt='facebook' placeholder='blur' blurDataURL='data:...' width={1000} height={1000} quality={80} loading='lazy'/>
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,7/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image className='w-14' src="/spotify.svg" alt='facebook' placeholder='blur' blurDataURL='data:...' width={1000} height={1000} quality={80} loading='lazy'/>
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,3/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image className='w-14' src="/tesla.svg" alt='facebook' placeholder='blur' blurDataURL='data:...' width={1000} height={1000} quality={80} loading='lazy'/>
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,9/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image className='w-14' src="/evernote.svg" alt='facebook' placeholder='blur' blurDataURL='data:...' width={1000} height={1000} quality={80} loading='lazy'/>
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,5/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image className='w-14' src="/google.svg" alt='facebook' placeholder='blur' blurDataURL='data:...' width={1000} height={1000} quality={80} loading='lazy'/>
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,2/5</p> </div>
                </div>


        </div>
    </div>
  )
}

export default HomeRating