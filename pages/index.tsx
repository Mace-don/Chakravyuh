import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'
import supabase from '../utils/supabase'

const HomePage = () => {
  return (
    <div>
      <video
        loop
        muted
        autoPlay
        className="fixed -z-10 h-screen w-screen overflow-hidden bg-fixed object-cover"
      >
        <source src="/testVid.mp4" />
      </video>
      <Navbar />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src="/Charavyuh.png" width="300" height="300" quality="100" />
      </div>
    </div>
  )
}

export default HomePage
