import React from 'react'
import { SiExpress, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

function Projects() {

    const projects = [
        {
            title: "Smart Home App",
            tech: [SiReact,SiNodedotjs,SiExpress,SiMongodb],
            link: 'https://smart-home-ui-ranuga.netlify.app/',
            cover: '/Smart-Home UI.png.png',
            background: "bg-green-500",
        },

        {
            title: "Chatbot using GPT API (provides answers as an experienced Software Engineer)",
            tech: [SiReact],
            link: 'https://gpt-react-chatbot.netlify.app/',
            cover: '/Chatbot with ChatGPT API.png',
            background: "bg-green-500",
        },

        {
            title: "Portfolio Website",
            tech: [SiNextdotjs,SiTypescript],
            link: '',
            cover: '/Portfolio Website.png',
            background: "bg-green-500",
        },

        {
            title: "PCOS-FertiliCare",
            tech: [SiNextdotjs,SiNestjs,SiMongodb,SiTailwindcss,SiTypescript],
            link: 'https://smart-home-ui-ranuga.netlify.app/',
            cover: '/PCOS-FertiliCare.png',
            background: "bg-green-500",
        },



    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title 
            text='Projects'
            className='flex flex-col items-center justify-center rotate-6'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project,index)=>{
                return <Link href= {project.link} key={index}>
                    <div className={cn("p-5 rounded-md", project.background)}>
                        <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer' >
                            <div className='space-y-5'>

                            
                                <h1 className='text-2xl font-bold'> {project.title}</h1>
                                <div className='flex items-center gap-5'>
                                    {project.tech.map((Icon,index)=>{
                                        return <Icon className='w-8 h-8' key= {index}/>
                                    })}
                                </div>
                            </div>
                        </DirectionAwareHover>
                    </div>
                </Link>
            })}
        </div>
    </div>
  )
}

export default Projects