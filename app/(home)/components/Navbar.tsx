"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";

function Navbar({ className }: { className?: string }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const socials = [
        { link: "https://www.linkedin.com/in/ranuga-anthony/", label: "LinkedIn", Icon: SiLinkedin },
        { link: "https://github.com/ranuga-anthony", label: "GitHub", Icon: SiGithub },
    ];

    const navLinks = [
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "mailto:ranugaolitha1210@gmail.com" },
    ];

    return (
        <nav className={cn(
            'w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-300',
            scrolled
                ? 'sticky top-0 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-lg shadow-black/20'
                : 'relative bg-transparent',
            className
        )}>
            <Link href="/" className='text-xl font-bold tracking-tight'>
                <span className='text-white'>ranuga</span>
                <span className='text-emerald-400'>.dev</span>
            </Link>

            <div className='hidden md:flex items-center gap-8'>
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        href={link.href}
                        className='text-sm text-gray-400 hover:text-white transition-colors duration-200'
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className='flex items-center gap-4'>
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <Link
                            href={social.link}
                            key={index}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon className='w-5 h-5 text-gray-400 hover:text-white hover:scale-110 transition-all duration-200' />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

export default Navbar;
