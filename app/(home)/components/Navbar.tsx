import { cn } from '@/lib/utils';
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";


function Navbar({className}:{className?:string}) {

    const socials = [
        {
            Link: "https://www.linkedin.com/in/ranuga-anthony/",
            Label:"Linkedin",
            Icon: SiLinkedin,
        },

        {
            Link: "https://github.com/ranuga-anthony",
            Label:"Github",
            Icon: SiGithub,
        }
    ]
  return (
    <nav className= {cn('py-10 flex justify-between items-center',className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'> Ranuga 👨🏻‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social,index)=>{

                const Icon = social.Icon;

                return <Link href ={social.Link} key = {index} aria-label={social.Label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                </Link>
            })}
        </div>
    </nav>
  )
}

export default Navbar