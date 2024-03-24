'use client'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { setNavbarTheme } from '@/lib/redux/globalSlicer'
import { Button } from '@/components/ui/button'
import Hero from './components/Hero'
import Overview from './components/Overview'

const page = () => {
    
        const navbarTheme = useSelector((state : RootState) => state.globalReducer.store.navbarDarkTheme)
        const dispatch = useDispatch();
        useEffect(() => { dispatch(setNavbarTheme(true)) } , [])

  return (

    <>
            <Navbar/>

        <section className='bg-[#ffefdb]'> <Hero/> </section>
        <section className='bg-white'> <Overview/> </section>
    
    </>

  )
}

export default page