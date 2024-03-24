import React from 'react'
import Navbar from '../components/Navbar'
import CardServicesPrice from '../components/CardServicesPrice'
import { ElitePackage, EnterprisePackage, EssentialPackage, TeamPackage } from '@/app/components/HomeServicePrice.config'


const page = () => {
  return (
    <>
    
        <Navbar/>
        <div className='bg-[#ffc67e] px-20 py-40 flex flex-col items-center justify-center gap-10'>

            <div className='flex flex-col items-center justify-center text-center gap-4'>
                <h1 className='md:text-4xl text-2xl font-bold'>Plans for teams of all sizes</h1>
                <p className='md:text-lg'>Per month, billed annualy in USD</p>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-8'>

                <CardServicesPrice title={"Essential"} isMain={false} price={15} listBenefit={EssentialPackage}/>
                <CardServicesPrice title={"Team"} isMain={true} price={49} listBenefit={TeamPackage}/>
                <CardServicesPrice title={"Enterprise"} isMain={false} price={99} listBenefit={EnterprisePackage}/>
                <CardServicesPrice title={"Elite"} isMain={false} price={199} listBenefit={ElitePackage}/>

            </div>

            <div className='flex flex-col items-center text-center justify-center'>
                <h2 className='text-xl font-semibold'>All Support plans come with the Lite versions of Chat, Talk, and Guide</h2>
                <p>Prices shown are billed annualy. For prices billed month to month</p>

            </div>

        </div>
    
    </>
  )
}

export default page