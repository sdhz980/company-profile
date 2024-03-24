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
import { Check } from 'lucide-react'



interface CardServiceProps {
    title : string;
    price: number;
    listBenefit: string[];
    isMain: boolean;
}

const CardServicesPrice = ({title ,price ,listBenefit,isMain} :CardServiceProps) => {
  return (
    <Card className={`w-[300px] rounded-xl ${isMain ? "border-2 border-[#6000C4]" : ""}`}>

        <CardHeader className='flex items-center text-center gap-4'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <div className='flex justify-center md:py-0 py-8 gap-3 items-center rounded-sm w-[110%] h-[8vw] bg-gray-400 bg-opacity-20'> 
                <h1 className='text-4xl font-bold'>${price}</h1>
                <p className='font-light text-xsm'>12 people</p>
            </div>
        </CardHeader>

        <CardContent className='h-[300px] p-8'>
        
          <ul className='flex flex-col gap-4'>
            { listBenefit.map((item:any,index:number) => 
                    <li className='flex gap-2 font-semibold' key={index}>
                      <Check color="#ffc67e" />
                      <p>{item}</p>
                    </li>) }
          </ul>

        </CardContent>

        <CardFooter className='grid gap-4 w-full'>
            <Button variant="outline" className='rounded-full bg-[#6000C4] border-[#6000C4] text-white'>START TRIAL</Button>
            <Button variant="outline" className='rounded-full border-[#6000C4] text-[#6000C4]'>BUY NOW</Button>
        </CardFooter>

    </Card>
  )
}

export default CardServicesPrice