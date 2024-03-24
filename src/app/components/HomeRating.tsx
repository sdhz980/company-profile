import { Star } from 'lucide-react'
import React from 'react'

const HomeRating = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 px-[7%] py-[7%]'>
        <h1 className='text-4xl font-bold'>Over 3,000 reviews & ratings</h1>
        <p>Highly rated by thousands of customers all over the world</p>

        <div className='grid md:grid-cols-6 grid-cols-2 md:gap-20 gap-10 mt-4'>
            

                <div className='flex flex-col items-center justify-center'>
                    <img className='w-14' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" />
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,5/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-14' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" />
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,5/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-14' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" />
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,5/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-14' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" />
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,5/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-14' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" />
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,5/5</p> </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-14' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" />
                    <div className='flex items-center justify-center gap-2'><Star className='w-4'/> <p>4,5/5</p> </div>
                </div>


        </div>
    </div>
  )
}

export default HomeRating