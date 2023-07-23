
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/" className='w-16 h-16 bg-dark text-primaryDark flex items-center justify-center rounded-full 
        text-2xl font-bold border border-solid border-transparent dark:border-primaryDark'
        whileHover={{
            backgroundColor:["#121212", "rgba(232,51,139,1)","rgba(193,57,121,1)","rgba(92,44,144,1)","rgba(42,46,116,1)", "#121212"],
            transition: {duration: 1, repeat: Infinity}
        }}>
        JA
        </MotionLink>
    </div>
  )
}

export default Logo