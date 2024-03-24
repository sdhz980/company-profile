import React from 'react'
import Hero from './components/Hero'
import Overview from './components/Overview'

const page = () => {

  return (

    <>

        <section className='bg-[#ffefdb]'> <Hero/> </section>
        <section className='bg-white'> <Overview/> </section>
    
    </>

  )
}

export default page