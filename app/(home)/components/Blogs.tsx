import React from 'react'
import Link from 'next/link'
import Title from './Title'
import { SiMedium } from 'react-icons/si'

const blogs = [
    {
        title: "Everything you need to know about NestJS — the newest Node-based backend framework",
        description: "A deep dive into NestJS — the progressive Node.js framework built with TypeScript. Covers architecture, modules, dependency injection, decorators, and why it's becoming the go-to choice for scalable backend development.",
        date: "May 2024",
        readTime: "5 min read",
        tags: ["NestJS", "Node.js", "TypeScript", "Backend"],
        link: "https://medium.com/codex/everything-you-need-to-know-about-nestjs-the-newest-node-based-backend-framework-f1a864025204",
    },
]

function Blogs() {
    return (
        <div className='py-10'>
            <Title
                text='Blog'
                className='flex flex-col items-center justify-center -rotate-6'
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
                {blogs.map((blog, index) => (
                    <Link
                        href={blog.link}
                        key={index}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group block h-full'
                    >
                        <div className='h-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300'>
                            <div className='flex items-center gap-2 mb-4'>
                                <SiMedium className='w-4 h-4 text-gray-400' />
                                <span className='text-xs text-gray-400'>{blog.date} · {blog.readTime}</span>
                            </div>

                            <h3 className='text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-200 mb-3'>
                                {blog.title}
                            </h3>

                            <p className='text-gray-400 text-sm leading-relaxed mb-5'>
                                {blog.description}
                            </p>

                            <div className='flex flex-wrap gap-2'>
                                {blog.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className='text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='flex justify-center mt-10'>
                <Link
                    href='https://medium.com/codex'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200 border border-white/10 rounded-full px-5 py-2.5 hover:border-emerald-500/50'
                >
                    <SiMedium className='w-4 h-4' />
                    View all on Medium
                </Link>
            </div>
        </div>
    )
}

export default Blogs
