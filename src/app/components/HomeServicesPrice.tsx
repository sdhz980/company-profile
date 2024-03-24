import React from 'react'
import CardServicesPrice from './CardServicesPrice'

const HomeServicesPrice = () => {
  return (

    <div className='flex flex-col gap-10 items-center justify-center px-10 py-20'>

        <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className='font-bold md:text-4xl text-2xl text-center'>Plans for teams of all sizes</h1>
            <p>Per month,billed annualy in USD</p> 
        </div>

        <div className='flex flex-row flex-wrap gap-10 items-center justify-center'>

            <CardServicesPrice title={"Essential"} isMain={false} price={15} listBenefit={[]}/>
            <CardServicesPrice title={"Team"} isMain={true} price={49} listBenefit={[]}/>
            <CardServicesPrice title={"Enterprise"} isMain={false} price={99} listBenefit={[]}/>
            <CardServicesPrice title={"Elite"} isMain={false} price={199} listBenefit={[]}/>
            
        </div>

        <div className='flex flex-col items-center text-center justify-center mt-4 gap-4'>
            <h2 className='text-xl font-bold'>All Support plans come with the Lite version of Chat, Talk and Guide</h2>
            <p>Prices shown are biled annualy, For prices billed month-to-month, and above subscriptions include Explore Lite reporting</p>
        </div>

        <div className='w-[80%] h-[1px] bg-slate-500'></div>

    </div>
  )
}

export default HomeServicesPrice