"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaJava } from "react-icons/fa";

function Skills() {

  const skills = [
    {
      text: "Python",
      Icon: SiPython,
    },

    {
      text: "Java",
      Icon: FaJava,
    },

    {
      text: "HTML",
      Icon: SiHtml5,
    },

    {
      text: "CSS",
      Icon: SiCss3,
    },

    {
      text: "JavaScript",
      Icon: SiJavascript,
    },

    {
      text: "TypeScript",
      Icon: SiTypescript,
    },

    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },

    {
      text: "ReactJS",
      Icon: SiReact,
    },

    {
      text: "NodeJS",
      Icon: SiNodedotjs,
    },

    {
      text: "NextJS",
      Icon: SiNextdotjs,
    },

    {
      text: "NestJS",
      Icon: SiNestjs,
    },

    {
      text: "Express",
      Icon: SiExpress,
    },

    {
      text: "MongoDB",
      Icon: SiMongodb,
    },

    {
      text: "MySQL",
      Icon: SiMysql,
    },
  ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title 
            text='Skills 🌟'
            className='flex flex-col items-center justify-center -rotate-6'
        />

        <HoverEffect items = {skills}/>
    </div>
  )
}

export default Skills