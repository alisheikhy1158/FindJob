import React from 'react'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

export default function HeroSection() {
    return (
        <>
            <div className='text-center'>
                <div className='flex-col gap-5 my-10'>
                    <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                    <h1 className=' my-auto py-4 text-5xl font-bold'>Search, Apply & <br />Get Your <span className='text-[#F83002]'>Dream Job</span> </h1>
                    <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ea odio nisi adipisci sapiente.</p>
                    <div className='flex w-[40%] shadow-lg border-gray-200  rounded-full items-center mx-auto overflow-hidden'>
                        <input type="text"
                         placeholder='Search for jobs...'
                         className='outline-none border-none w-full py-3 pl-6'
                        />
                        <Button className='bg-[#F83002] hover:bg-[#c32602] text-white rounded-r-full rounded-l-none h-12 px-5 flex items-center justify-center border-none'>
                            <Search className='h-auto w-5'/>
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}

