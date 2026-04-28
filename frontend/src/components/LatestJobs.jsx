import React from 'react'
import LatestJobsCards from './LatestJobsCards'

const randomJobs = [1,2,3,4,5,6,7,8]

export default function LatestJobs() {
  return (
    < div className='max-2-7xl mx-auto my-20 px-12'>  
        <h1 className='text-4xl font-bold'>Latest & Top <span className='text-[#F83002]'>Job Openings</span></h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
        {
            randomJobs.slice(0,6).map((item, index) => <LatestJobsCards/>)
        }
        </div>
    </div>
  )
}
