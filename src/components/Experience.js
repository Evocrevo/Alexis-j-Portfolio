import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
                    target="_blank"
                    className='text-primary capitalize dark:text-light'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="TEAM RESEARCHER" 
                        company="STAY ALERT: A REAL-TIME ANDROID- BASED APP FOR RESCUE SUPPORT SYSTEMS DURING DISASTERS AND EMERGENCIES"
                        time="2023" 
                        address="Capstone Project in Research"
                        work="For STAY ALERT: A REAL-TIME ANDROID-BASED APP FOR RESCUE SUPPORT SYSTEMS DURING DISASTERS AND EMERGENCIES, 
                        I designed a web-based admin to alter and monitor data from our application's Firebase database."

                    />
                    <Details
                        position="COMPETITOR" 
                        company="TESDA Region V"
                        companyLink="https://www.facebook.com/MabiniColleges/posts/pfbid028zg89tXABsxsVrU1Ww3Yw2VxwXguVfcJy89cVZmqjwCUP2ZMzBftpRHCNTdDfw4nl"
                        time="September 2022" 
                        address="Camarines Sur, Legazpi, Albay"
                        work="I won a Gold Medal at the Provincial level and a Silver Medal at the Regional level in the Philippines National Skill Competition - TESDA 2022. 
                        I demonstrated my skills in Android Studio and VB.NET by designing solutions under time constraints and following the test cases."

                    />
                    <Details
                        position="WEB DEVELOPER" 
                        company="Mabini Colleges Inc"
                        companyLink="https://mabinicolleges.edu.ph/"
                        time="Summer 2022" 
                        address="MC Inventory System for Property Custodian Department"
                        work="I was the lead developer for Mabini College's Property Custodian Department's MC Inventory System. 
                        The system effectively maintains inventory by using PHP as the major language and HTML/CSS for the front-end and back-end, respectively. 
                        It runs on XAMPP and has considerably reduced human labeling labor while improving item delivery to multiple departments. 
                        For increased productivity, the system includes capabilities such as creating ready-to-print PDFs from the database and keeping organized data."

                    />
                    <Details
                        position="COMPUTER SUPPORT" 
                        company="Mountview College"
                        companyLink="https://www.facebook.com/mountviewcollege.ph/"
                        time="2018" 
                        address="ALDP Plaza Mall,Diversion Road,Brgy.Triangulo, Naga, Camarines Sur"
                        work="Formatting and reinstalling the operating system, as well as configuring the network for the computer lab."

                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience