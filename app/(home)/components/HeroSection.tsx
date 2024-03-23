import { MovingBorder, MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold'> Hey there, Welcome to my website! 👋🏻<br/> <span className='underline underline-offset-8 decoration-green-500'> {"I'm Ranuga."} </span></h1>
            <p className='md:w-96 text-lg text-gray-300 '> 
                {
                    "I'm a passionate software engineer with a knack for full-stack development, machine learning, devops and many more. By experimenting many frameworks such as React, NextJS, NodeJS, NestJS and languages such as Python and its' associated libraries used for machine learning such as Pandas, Numpy, Matplotlib etc.., Java, Javascript, Typescript, and experimenting with a variety of machine learning models such as decision trees and logistic regression etc... I always try my best to create working and seamless systems and applications."
                }
            </p>

            <Link href  = {"mailto: ranugaolitha1210@gmail.com"} className='inline-block group'>
                <Title text='Contact Me'/>
            </Link>
        </div>

        <div className='relative'> 
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 transate-x-8'>
                    <div className='w-32 h-32 rounded-2xl  bg-green-500'></div>
                    <div className='w-32 h-32 rounded-full  bg-indigo-500'></div>
                </div> 

                <div className='flex gap-3 -transate-x-8'>
                    <div className='w-32 h-32 rounded-2xl  bg-indigo-500'></div>
                    <div className='w-32 h-32 rounded-full bg-green-500'></div>
                </div> 
                
                <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
            </div>

            <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
                <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold
                '>
                    <p> 🏢 Available for Work </p>
                </MovingBorderBtn>
            </div>
        </div>
            
    </div>
  )
}

export default HeroSection