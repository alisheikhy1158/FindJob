import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

export default function Job() {
  const navigate = useNavigate();
  const jobId = 1; 
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-100'>
      <div className='flex justify-between items-center'>
        <p className='text-sm text-gray-500 '>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon"> <Bookmark /> </Button>

      </div>

      <div className='flex items-center gap-2 my-2'>
        <Button>
          <Avatar>
            <AvatarImage src="https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740&q=80" />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>Company Name</h1>
          <p className='text-sm text-gray-500'>Pakistan</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-800 font-bold'} variant='ghost border-black-2'>12 Positons</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant='ghost'>Part Time</Badge>
        <Badge className={'text-[#00C853] font-bold'} variant='ghost'>24 LPA</Badge>
      </div>
      <div>
        <div className='flex items-center gap-4 mt-4'>
        <Button onClick={() => navigate(`/details/${jobId}`)} variant='outline'>Details</Button>
        <Button className='bg-blue-500'>Save for later</Button>
        </div>
      </div>
    </div>
  )
}
