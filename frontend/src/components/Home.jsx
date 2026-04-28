import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import HeroSection from './HeroSection'
import CategoryCoursel from './CategoryCoursel'
import LatestJobs from './LatestJobs'

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoryCoursel/>
    <LatestJobs/>
     <Footer/> 
    </>
  )
}
