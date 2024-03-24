import React from 'react'
import CardServicesPrice from './CardServicesPrice'

const HomeServicesPrice = () => {
  return (

    <div className='flex flex-col gap-10 items-center justify-center px-10 py-20'>

        <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className='font-bold text-4xl'>Plans for teams of all sizes</h1>
            <p>Per month,billed annualy in USD</p> 
        </div>

        <div className='flex flex-row flex-wrap gap-10 items-center justify-center'>

            <CardServicesPrice title={"Essential"} price={15} listBenefit={[]}/>
            <CardServicesPrice title={"Team"} price={49} listBenefit={[]}/>
            <CardServicesPrice title={"Enterprise"} price={99} listBenefit={[]}/>
            <CardServicesPrice title={"Elite"} price={199} listBenefit={[]}/>
            
        </div>

        <div className='flex flex-col items-center justify-center mt-4 gap-4'>
            <h2 className='text-xl font-bold'>All Support plans come with the Lite version of Chat, Talk and Guide</h2>
            <p>Prices shown are biled annualy, For prices billed month-to-month, and above subscriptions include Explore Lite reporting</p>
        </div>

        <div className='w-[80%] h-[1px] bg-slate-500'></div>

    </div>
  )
}

export default HomeServicesPrice