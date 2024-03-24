'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { buttonVariants } from "@/components/ui/button"
  import { Button } from "@/components/ui/button"



interface CardServiceProps {
    title : string;
    price: number;
    listBenefit: [];
}

const CardServicesPrice = ({title ,price ,listBenefit} :CardServiceProps) => {
  return (
    <Card className='w-[300px] rounded-xl'>

        <CardHeader className='flex items-center text-center gap-4'>
            <CardTitle className='text-xl'>{title}</CardTitle>
            <div className='flex justify-center gap-3 items-center rounded-sm w-[110%] h-[8vw] bg-gray-400 bg-opacity-20'> 
                <h1 className='text-3xl font-bold'>${price}</h1>
                <p className='font-light text-xsm'>12 people</p>
            </div>
        </CardHeader>

        <CardContent className='h-[300px]'>
            
        </CardContent>

        <CardFooter className='grid gap-4 w-full'>
            <Button variant="outline" className='rounded-full bg-purple-500 border-purple-500 text-white'>START TRIAL</Button>
            <Button variant="outline" className='rounded-full border-purple-500 text-purple-500'>BUY NOW</Button>
        </CardFooter>

    </Card>
  )
}

export default CardServicesPrice