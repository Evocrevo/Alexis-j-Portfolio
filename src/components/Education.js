import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg '>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
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
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark
                    md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Bachelor Of Science In Computer Science"
                        time="2019-2023"
                        place="Mabini Colleges Inc"
                        info="Programming principles, data structures and algorithms, computer organization and architecture, operating systems, 
                        database management systems, software engineering, web programming, computer networks, artificial intelligence, and discrete 
                        mathematics were among the relevant subjects."
                    />
                    <Details
                        type="Senior High: TVL-ICT"
                        time="2017-2019"
                        place="Mabini Colleges Inc"
                        info="The TVL-ICT track is designed to provide students with the 
                        technical knowledge and skills required for entry-level careers in the IT sector or additional study in related subjects."
                    />
                    <Details
                        type="SECONDARY EDUCATION"
                        time="2013-2017"
                        place="Alawihao National High School"
                        info="Core disciplines such as mathematics, science, language arts (English or the language of teaching), 
                        social studies/history, and physical education are typically included in these courses.Students may also study foreign languages,
                        the arts (e.g., visual arts, music), and practical topics such as home economics or technological education."
                    />
                    <Details
                        type="PRIMARY EDUCATION"
                        time="2007-2013"
                        place="UP Alawihao Resettlement Elementary School"
                        info="Language arts (reading, writing, and language skills), mathematics, science, and social studies are common subjects covered in these classes. 
                        To stimulate creative and physical development, students also participate in arts and crafts, physical education, and music programs."

                    />
                </ul>
            </div>
        </div>
    )
}

export default Education