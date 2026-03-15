import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <Navbar />

      <div className='dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto px-6'>
          <HeroSection />
        </div>
        <div className='h-40 bg-gradient-to-t from-black absolute bottom-0 left-0 w-full pointer-events-none' />
      </div>

      <div className='max-w-7xl mx-auto px-6 pb-10'>
        <div className='border-t border-white/10 pt-8 text-center text-xs text-gray-600'>
          © {new Date().getFullYear()} Ranuga Anthony. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default page
