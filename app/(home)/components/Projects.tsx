import React from 'react'
import { SiExpress, SiMongodb, SiNeo4J, SiNestjs, SiNextdotjs, SiNodedotjs, SiOpenai, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

type IconComponent = React.ComponentType<{ className?: string }>
type ImageIcon = { src: string; alt: string }
type TechIcon = IconComponent | ImageIcon

function isImageIcon(icon: TechIcon): icon is ImageIcon {
    return typeof icon === 'object' && 'src' in icon
}

function Projects() {

    const projects = [
        {
            title: "HGCacheMem",
            tech: [
                SiPython,
                { src: 'https://cdn.simpleicons.org/langchain', alt: 'LangChain' },
                { src: 'https://cdn.simpleicons.org/huggingface', alt: 'HuggingFace' },
                SiNeo4J,
                { src: 'https://cdn.simpleicons.org/chromadb', alt: 'ChromaDB' },
                SiOpenai,
            ] as TechIcon[],
            link: 'https://pypi.org/project/hgcachemem/',
            cover: '/browser based visualization.png',
            background: "bg-green-500",
        },

        {
            title: "PCOS-FertiliCare",
            tech: [SiNextdotjs,SiNestjs,SiMongodb,SiTailwindcss,SiTypescript] as TechIcon[],
            link: 'https://smart-home-ui-ranuga.netlify.app/',
            cover: '/PCOS-FertiliCare.png',
            background: "bg-green-500",
        },

        {
            title: "Smart Home App",
            tech: [SiReact,SiNodedotjs,SiExpress,SiMongodb] as TechIcon[],
            link: 'https://smart-home-ui-ranuga.netlify.app/',
            cover: '/Smart-Home UI.png.png',
            background: "bg-green-500",
        },

        {
            title: "Chatbot using GPT API (provides answers as an experienced Software Engineer)",
            tech: [SiReact] as TechIcon[],
            link: 'https://gpt-react-chatbot.netlify.app/',
            cover: '/Chatbot with ChatGPT API.png',
            background: "bg-green-500",
        },

        {
            title: "Portfolio Website",
            tech: [SiNextdotjs,SiTypescript] as TechIcon[],
            link: '',
            cover: '/Portfolio Website.png',
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
                                    {project.tech.map((icon, index) => {
                                        if (isImageIcon(icon)) {
                                            return <img key={index} src={icon.src} alt={icon.alt} className='w-8 h-8 invert' />
                                        }
                                        const Icon = icon as IconComponent
                                        return <Icon className='w-8 h-8' key={index}/>
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
