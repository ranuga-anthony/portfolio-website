import React from 'react'
import Navbar from '../(home)/components/Navbar'
import Link from 'next/link'
import { SiMedium } from 'react-icons/si'

const blogs = [
    {
        title: "Everything you need to know about NestJS — the newest Node-based backend framework",
        description: "A deep dive into NestJS — the progressive Node.js framework built with TypeScript. Covers architecture, modules, dependency injection, decorators, and why it's becoming the go-to choice for scalable backend development.",
        date: "May 2024",
        readTime: "5 min read",
        publication: "CODEX",
        tags: ["NestJS", "Node.js", "TypeScript", "Backend"],
        link: "https://medium.com/codex/everything-you-need-to-know-about-nestjs-the-newest-node-based-backend-framework-f1a864025204",
    },
]

export default function BlogPage() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Navbar />

            <div className='max-w-3xl mx-auto px-6 py-24'>
                {/* Header */}
                <div className='mb-24'>
                    <p className='text-emerald-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6'>
                        Thoughts & Writings
                    </p>
                    <h1 className='text-7xl md:text-9xl font-bold bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent leading-none'>
                        Blog
                    </h1>
                </div>

                {/* Articles */}
                <div className='space-y-4'>
                    {blogs.map((blog, index) => (
                        <Link
                            href={blog.link}
                            key={index}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group block'
                        >
                            <article className='p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300'>
                                {/* Meta */}
                                <div className='flex items-center gap-3 text-xs text-gray-600 mb-6'>
                                    <div className='flex items-center gap-1.5'>
                                        <SiMedium className='w-3.5 h-3.5' />
                                        <span>{blog.publication}</span>
                                    </div>
                                    <span>·</span>
                                    <span>{blog.date}</span>
                                    <span>·</span>
                                    <span>{blog.readTime}</span>
                                </div>

                                {/* Title */}
                                <h2 className='text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-4 leading-snug'>
                                    {blog.title}
                                </h2>

                                {/* Description */}
                                <p className='text-gray-400 leading-relaxed text-sm mb-6'>
                                    {blog.description}
                                </p>

                                {/* Tags */}
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {blog.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className='text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read link */}
                                <div className='flex items-center gap-2 text-sm text-emerald-400 font-medium group-hover:gap-4 transition-all duration-300'>
                                    Read on Medium <span>→</span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* View all */}
                <div className='flex justify-center mt-14'>
                    <Link
                        href='https://medium.com/codex'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-all duration-200 border border-white/10 rounded-full px-6 py-3 hover:border-emerald-500/50'
                    >
                        <SiMedium className='w-4 h-4' />
                        Browse CODEX on Medium
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className='max-w-3xl mx-auto px-6 pb-10'>
                <div className='border-t border-white/10 pt-8 text-center text-xs text-gray-700'>
                    © {new Date().getFullYear()} Ranuga Anthony
                </div>
            </div>
        </div>
    )
}
