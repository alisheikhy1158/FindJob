import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export default function JobDetails() {
    const isApplied = false;
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 px-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-bold text-xl'>Software Engineer</h1>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className={'text-blue-800 font-bold'} variant='ghost border-black-2'>12 Positons</Badge>
                            <Badge className={'text-[#F83002] font-bold'} variant='ghost'>Part Time</Badge>
                            <Badge className={'text-[#00C853] font-bold'} variant='ghost'>24 LPA</Badge>
                        </div>
                    </div>
                    <Button className={` rounded-lg ${isApplied ? 'bg-gray-600 text-white hover:bg-gray-900 cursor-not-allowed' : 'bg-[#F83002] text-white hover:bg-[#ba3315]'} cursor-pointer`}
                        disabled={isApplied}>
                        {isApplied ? 'Applied' : 'Apply Now'}
                    </Button>
                </div>
                <h1 className='font-bold text-medium border-b-2 border-b-gray-300 my-4'>Job Details</h1>
                <div className='my-4'>
                    <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Software Engineer</span></h1>
                    <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Rawalpindi</span></h1>
                    <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur.</span></h1>
                    <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
                    <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>24 LPA</span></h1>
                    <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>120</span></h1>
                    <h1 className='font-bold my-1'>Posted on: <span className='pl-4 font-normal text-gray-800'>2023-10-01</span></h1>
                </div>
            </div>
            <Footer />
        </>
    )
}
