"use client";
import React from 'react'
import Navbar from '../(home)/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    SiExpress, SiMongodb, SiNestjs, SiNextdotjs,
    SiNodedotjs, SiReact, SiTailwindcss, SiTypescript
} from 'react-icons/si'

const projects = [
    {
        index: "01",
        title: "Smart Home App",
        description: "A full-stack IoT dashboard for controlling smart home devices. Features real-time device management and an intuitive responsive UI, backed by a Node.js REST API with MongoDB.",
        tech: [
            { Icon: SiReact, name: "React" },
            { Icon: SiNodedotjs, name: "Node.js" },
            { Icon: SiExpress, name: "Express" },
            { Icon: SiMongodb, name: "MongoDB" },
        ],
        link: 'https://smart-home-ui-ranuga.netlify.app/',
        cover: '/Smart-Home UI.png.png',
    },
    {
        index: "02",
        title: "Chatbot using GPT API",
        description: "An AI-powered chatbot that responds as an experienced software engineer. Integrated with OpenAI's GPT API for intelligent, context-aware answers in a clean React interface.",
        tech: [
            { Icon: SiReact, name: "React" },
        ],
        link: 'https://gpt-react-chatbot.netlify.app/',
        cover: '/Chatbot with ChatGPT API.png',
    },
    {
        index: "03",
        title: "Portfolio Website",
        description: "The portfolio you're looking at — built with Next.js and TypeScript, featuring a modern dark UI, Framer Motion animations, glassmorphism design, and a dedicated blog section.",
        tech: [
            { Icon: SiNextdotjs, name: "Next.js" },
            { Icon: SiTypescript, name: "TypeScript" },
        ],
        link: 'https://ranuga-portfolio-website.vercel.app/',
        cover: '/Portfolio Website.png',
    },
    {
        index: "04",
        title: "PCOS-FertiliCare",
        description: "A health-tech platform for PCOS management and fertility tracking. Full-stack app with a NestJS REST API, MongoDB database, and a Next.js + TypeScript frontend.",
        tech: [
            { Icon: SiNextdotjs, name: "Next.js" },
            { Icon: SiNestjs, name: "NestJS" },
            { Icon: SiMongodb, name: "MongoDB" },
            { Icon: SiTailwindcss, name: "Tailwind" },
            { Icon: SiTypescript, name: "TypeScript" },
        ],
        link: '',
        cover: '/PCOS-FertiliCare.png',
    },
]

export default function ProjectsPage() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Navbar />

            <div className='max-w-6xl mx-auto px-6 py-24'>
                {/* Header */}
                <div className='mb-24'>
                    <p className='text-emerald-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6'>
                        What I've built
                    </p>
                    <h1 className='text-7xl md:text-9xl font-bold bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent leading-none'>
                        Projects
                    </h1>
                </div>

                {/* Project cards */}
                <div className='space-y-6'>
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 1
                        return (
                            <motion.div
                                key={project.index}
                                initial={{ opacity: 0, y: 48 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className='group grid grid-cols-1 lg:grid-cols-2 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-all duration-500'
                            >
                                {/* Image panel */}
                                <div className={`relative h-64 lg:h-[360px] overflow-hidden ${isEven ? 'lg:order-2' : ''}`}>
                                    <Image
                                        src={project.cover}
                                        alt={project.title}
                                        fill
                                        className='object-cover group-hover:scale-105 transition-transform duration-700'
                                    />
                                    <div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500' />
                                </div>

                                {/* Content panel */}
                                <div className={`flex flex-col justify-center p-10 lg:p-14 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                                    <span className='text-xs font-mono text-emerald-400/60 tracking-widest'>
                                        {project.index}
                                    </span>

                                    <h2 className='text-3xl lg:text-4xl font-bold text-white leading-tight'>
                                        {project.title}
                                    </h2>

                                    <p className='text-gray-400 leading-relaxed text-sm lg:text-base'>
                                        {project.description}
                                    </p>

                                    {/* Tech badges */}
                                    <div className='flex flex-wrap gap-2'>
                                        {project.tech.map(({ Icon, name }) => (
                                            <div
                                                key={name}
                                                className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300'
                                            >
                                                <Icon className='w-3.5 h-3.5' />
                                                {name}
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    {project.link && (
                                        <div className='pt-2'>
                                            <Link
                                                href={project.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold transition-all duration-200 hover:scale-105'
                                            >
                                                Live Demo
                                                <span>↗</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Footer */}
            <div className='max-w-6xl mx-auto px-6 pb-10'>
                <div className='border-t border-white/10 pt-8 text-center text-xs text-gray-700'>
                    © {new Date().getFullYear()} Ranuga Anthony
                </div>
            </div>
        </div>
    )
}
