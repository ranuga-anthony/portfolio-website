import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='min-h-[85vh] flex flex-col justify-center py-20 relative'>
        <div className='max-w-4xl space-y-8'>

            <div className='flex items-center gap-3'>
                <MovingBorderBtn borderRadius='2rem' className='px-4 py-2 text-sm font-medium'>
                    <span className='flex items-center gap-2'>
                        <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block'/>
                        Available for Work
                    </span>
                </MovingBorderBtn>
            </div>

            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight'>
                <span className='text-white'>{"Hi, I'm "}</span>
                <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                    Ranuga
                </span>
                <span className='text-white'>.</span>
            </h1>

            <p className='text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed'>
                Full-stack engineer & ML enthusiast building seamless digital experiences with{' '}
                <span className='text-white font-medium'>React</span>,{' '}
                <span className='text-white font-medium'>Next.js</span>,{' '}
                <span className='text-white font-medium'>Node.js</span>, and{' '}
                <span className='text-white font-medium'>Python</span>.
            </p>

            <div className='flex flex-wrap gap-4 pt-2'>
                <Link
                    href='mailto:ranugaolitha1210@gmail.com'
                    className='px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 hover:scale-105 inline-block'
                >
                    Get in touch
                </Link>
                <Link
                    href='https://github.com/ranuga-anthony'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 rounded-full border border-white/20 hover:border-white/50 text-white text-sm font-medium transition-all duration-200 hover:bg-white/5 inline-block'
                >
                    View GitHub
                </Link>
            </div>
        </div>

        <div className='glow absolute top-1/2 right-1/4 -z-10 opacity-40 pointer-events-none' />
    </div>
  )
}

export default HeroSection
