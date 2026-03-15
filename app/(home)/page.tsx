import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Footer from './components/footer'

function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>

      {/* Navbar — full width, sticky on scroll */}
      <Navbar />

      {/* Hero — grid background */}
      <div className='dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto px-6'>
          <HeroSection />
        </div>
        <div className='h-40 bg-gradient-to-t from-black absolute bottom-0 left-0 w-full pointer-events-none' />
      </div>

      {/* Content sections */}
      <div className='max-w-7xl mx-auto px-6 space-y-32 mt-10 pb-20'>
        <section id='skills'>
          <Skills />
        </section>

        <section id='projects'>
          <Projects />
        </section>

        <section id='blog'>
          <Blogs />
        </section>

        <Footer />
      </div>

    </div>
  )
}

export default page
