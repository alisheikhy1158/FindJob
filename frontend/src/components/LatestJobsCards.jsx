import React from 'react'
import { Badge } from './ui/badge'

export default function LatestJobsCards() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer px-5 hover:shadow-2xl transition-shadow duration-300'>
        <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>Pakistan</p>
        </div>
        <div>
            <h1 className='font-bold text-xl my-2'>Job Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-800 font-bold'} variant='ghost border-black-2'>12 Positons</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant='ghost'>Part Time</Badge>
            <Badge className={'text-[#00C853] font-bold'} variant='ghost'>24 LPA</Badge>
        </div>
    </div>
  )
}
