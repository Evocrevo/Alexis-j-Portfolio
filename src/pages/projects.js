import AnimatedText from '@/components/AnimatedText'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/project1.png'
import project2 from '../../public/images/projects/project2.png'
import project3 from '../../public/images/projects/project3.png'
import project4 from '../../public/images/projects/cert1.png'
import project5 from '../../public/images/projects/cert2.png'
import Link from 'next/link'
import Image from 'next/image'
import TransitionEffect from '@/components/TransitionEffect'


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
         border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-primaryDark
         lg:flex-col lg:p-8 xs:rounded-2xl: xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-primaryDark rounded-br-3xl
            xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className='w-full h-auto'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-light xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-5xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='my-2 flex items-center'>
                    <Link
                        href={github}
                        target="_blank"
                        className='w-10 dark:text-primaryDark'>
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className='ml-4 rounded-lg bg-dark text-primaryDark p-2 px-6 text-lg 
                        font-semibold dark:text-light dark:bg-primary
                        sm:px-4 sm:text-base'
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
const Project = ({ type, title, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid
        border-dark bg-light p-6 relative dark:bg-dark dark:border-primaryDark xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-primaryDark rounded-br-3xl
             md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg
                md:text-base'>{type}</span>
                <Link href={link}
                    target="_blank"
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full my-2 flex items-center justify-between'>
                    <Link
                        href={link}
                        target="_blank"
                        className='text-lg font-semibold underline dark:text-primaryDark md:text-base'
                    >Visit </Link>
                    <Link
                        href={github}
                        target="_blank"
                        className='w-8 dark:text-primaryDark md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}
const projects = () => {
    return (
        <>
            <Head>
                <title>JA | Projects Page</title>
                <meta name="description" content="Generated by JA" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="CodeCraft Webfolio"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xs:mb-4'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="JA | Portfolio"
                                img={project3}
                                summary="With Next.js, Tailwind CSS, and Framer-motion, I created a fantastic portfolio website. 
                                Framer Motion was used to generate the beautiful transitions and animation in this portfolio."
                                link="https://prompt-genius-jj1886ej3-evocrevo.vercel.app/"
                                github="https://github.com/Evocrevo/PromptGenius"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="PromptGenius"
                                img={project1}
                                link="https://prompt-genius-jj1886ej3-evocrevo.vercel.app/"
                                github="https://github.com/Evocrevo/PromptGenius"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <div className='col-span-6'>
                                <Project
                                    title="NextJS-Todo-App"
                                    img={project2}
                                    link="https://github.com/Evocrevo/NextJS-Todo-App"
                                    github="https://github.com/Evocrevo/NextJS-Todo-App"
                                    type="Featured Project"
                                />
                            </div>
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Gold-Medalist Provincial Level"
                                img={project4}
                                link="https://www.facebook.com/MabiniColleges/posts/pfbid028zg89tXABsxsVrU1Ww3Yw2VxwXguVfcJy89cVZmqjwCUP2ZMzBftpRHCNTdDfw4nl"
                                github="https://github.com/Evocrevo/"
                                type="Achievements"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <div className='col-span-6'>
                                <Project
                                    title="Silver-Medalist Regional Level"
                                    img={project5}
                                    link="https://www.facebook.com/MabiniColleges/posts/pfbid028zg89tXABsxsVrU1Ww3Yw2VxwXguVfcJy89cVZmqjwCUP2ZMzBftpRHCNTdDfw4nl"
                                    github="https://github.com/Evocrevo/"
                                    type="Achievements"
                                />
                            </div>
                        </div>
                        
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects