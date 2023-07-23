import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-meduim text-lg dark:text-primaryDark dark:border-primaryDark
        sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Build With<span className='text-primaryDark dark:text-red-600 text-3xl px-1'>&#9825;</span>by&nbsp;<Link href="https://www.facebook.com/profile.php?id=100087492764556" target={'_blank'}
                        className='underline underline-offset-2'>
                        John Alexis</Link>
                </div>
                <Link href="https://www.facebook.com/profile.php?id=100087492764556" target={'_blank'}
                    className='underline underline-offset-2'>
                    Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer