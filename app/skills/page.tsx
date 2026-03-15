"use client";
import React from 'react'
import Navbar from '../(home)/components/Navbar'
import { motion } from 'framer-motion'
import {
    SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb,
    SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPython,
    SiReact, SiTailwindcss, SiTypescript
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const categories = [
    {
        index: "01",
        name: "Languages",
        accent: "text-sky-400",
        border: "border-sky-500/20 hover:border-sky-500/60",
        glow: "hover:shadow-sky-500/10",
        skills: [
            { text: "Python", Icon: SiPython },
            { text: "Java", Icon: FaJava },
            { text: "JavaScript", Icon: SiJavascript },
            { text: "TypeScript", Icon: SiTypescript },
        ],
    },
    {
        index: "02",
        name: "Frontend",
        accent: "text-emerald-400",
        border: "border-emerald-500/20 hover:border-emerald-500/60",
        glow: "hover:shadow-emerald-500/10",
        skills: [
            { text: "HTML", Icon: SiHtml5 },
            { text: "CSS", Icon: SiCss3 },
            { text: "Tailwind CSS", Icon: SiTailwindcss },
            { text: "ReactJS", Icon: SiReact },
            { text: "NextJS", Icon: SiNextdotjs },
        ],
    },
    {
        index: "03",
        name: "Backend",
        accent: "text-violet-400",
        border: "border-violet-500/20 hover:border-violet-500/60",
        glow: "hover:shadow-violet-500/10",
        skills: [
            { text: "NodeJS", Icon: SiNodedotjs },
            { text: "NestJS", Icon: SiNestjs },
            { text: "Express", Icon: SiExpress },
        ],
    },
    {
        index: "04",
        name: "Databases",
        accent: "text-orange-400",
        border: "border-orange-500/20 hover:border-orange-500/60",
        glow: "hover:shadow-orange-500/10",
        skills: [
            { text: "MongoDB", Icon: SiMongodb },
            { text: "MySQL", Icon: SiMysql },
        ],
    },
]

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}
const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function SkillsPage() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Navbar />

            <div className='max-w-5xl mx-auto px-6 py-24'>
                {/* Header */}
                <div className='mb-24'>
                    <p className='text-emerald-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6'>
                        What I work with
                    </p>
                    <h1 className='text-7xl md:text-9xl font-bold bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent leading-none'>
                        Skills
                    </h1>
                </div>

                {/* Categories */}
                <div className='space-y-20'>
                    {categories.map((category) => (
                        <div key={category.name}>
                            {/* Category header */}
                            <div className='flex items-baseline gap-5 mb-8'>
                                <span className={`text-xs font-mono ${category.accent} opacity-60`}>
                                    {category.index}
                                </span>
                                <h2 className='text-sm font-semibold text-gray-400 uppercase tracking-[0.2em]'>
                                    {category.name}
                                </h2>
                                <div className='flex-1 h-px bg-white/10' />
                            </div>

                            {/* Skill cards */}
                            <motion.div
                                variants={container}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: true, margin: '-60px' }}
                                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'
                            >
                                {category.skills.map((skill) => {
                                    const Icon = skill.Icon
                                    return (
                                        <motion.div
                                            key={skill.text}
                                            variants={item}
                                            className={`group relative flex flex-col items-center gap-4 p-6 rounded-2xl border bg-white/[0.03] ${category.border} hover:bg-white/[0.07] hover:shadow-xl ${category.glow} transition-all duration-300 cursor-default`}
                                        >
                                            <Icon className='w-9 h-9 text-gray-400 group-hover:text-white transition-colors duration-300' />
                                            <span className='text-xs text-gray-500 group-hover:text-gray-200 transition-colors duration-300 font-medium text-center'>
                                                {skill.text}
                                            </span>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className='max-w-5xl mx-auto px-6 pb-10'>
                <div className='border-t border-white/10 pt-8 text-center text-xs text-gray-700'>
                    © {new Date().getFullYear()} Ranuga Anthony
                </div>
            </div>
        </div>
    )
}
