'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTeamMember } from '@/lib/redux/globalSlicer'
import { RootState } from '@/lib/redux/store'
import getTeamMember from '../api/getTeamMember'
import Image from 'next/image'

const page = () => {
    const dispatch = useDispatch();
    const teamMember = useSelector((state : RootState) => state.globalReducer.store.memberTeam)
    const roleMember = useSelector((state : RootState) => state.globalReducer.store.roleMember)

    const handleGetTeamMember = async() => {
        if (!teamMember.length) {
            const response = await getTeamMember();
            dispatch(setTeamMember(response.results))
        }
    }

    useEffect(()=> {
        handleGetTeamMember();
    },[])

  return (
    <>

            <div className='bg-[#6000C4] md:px-20 px-4 py-40 flex items-center justify-center'>
                
                <div className='md:w-[60%] text-center'>
                    <h1 className='md:text-5xl text-3xl font-bold text-white'>Our mission is to empower teams to create the next big thing</h1>
                </div>

                <div>

                </div>
            
            </div>

            <div className='bg-white md:px-40 py-20 gap-8 flex flex-col items-center justify-center'>

                <h1 className='text-3xl font-bold text-center'>"We believe that in today's global, knowledge-based economy, a company's true power lies in its people and culture."</h1>
                
                <div className='flex md:flex-row flex-col items-center justify-center gap-8'>

                    <div className='flex md:flex-row flex-wrap items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='w-20 h-20 rounded-full bg-black flex items-center justify-center text-white text-xl font-bold'>1</div>
                            <p className='font-semibold text-lg'>Be and become your best self</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row flex-wrap items-center justify-center'>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='w-20 h-20 rounded-full bg-[#FFB353] flex items-center justify-center text-white text-xl font-bold'>2</div>
                            <p className='font-semibold text-lg'>Cultivate relational mastery</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row flex-wrap items-center justify-center'>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='w-20 h-20 rounded-full bg-[#6000C4] flex items-center justify-center text-white text-xl font-bold'>3</div>
                            <p className='font-semibold text-lg'>Create customer transformation</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row flex-wrap items-center justify-center'>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='w-20 h-20 rounded-full bg-[#FFEFDB] flex items-center justify-center text-black text-xl font-bold'>4</div>
                            <p className='font-semibold text-lg'>Do the extraordinary</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex flex-col items-center mt-10 mb-40 justify-center md:gap-8 gap-4'>

                <h1 className='text-3xl font-bold'>Leadership Team</h1>
                <p className='md:w-[50%] w-[90%] text-center'>Oval's integrated and automated design empowers you to seamlessly run your business like a pro - from proposal to report season.</p>

                <div className='flex flex-wrap items-center justify-center gap-8'>
                    

                { teamMember?.map((item:any,index:number) => {
                        console.log(item);
                        const name = `${item?.name?.first} ${item?.name?.last}`; 
                        return (

                            <div key={index} className='flex flex-col gap-4 md:w-[25%] w-[150px]'>
                                <Image src={item.picture?.large} alt={name} loading='lazy' width={1000} height={1000} className='rounded-2xl' />
                                    <div>
                                        <h2 className='font-semibold'>{name}</h2>
                                        <p>{ roleMember[index] ? roleMember[index] : "Employee" }</p>
                                    </div>
                            </div>

                        )
                    })

                }

                </div>

            </div>

    </>
  )
}

export default page