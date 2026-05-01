'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Trending = () => {

    const hotTopics = [
        {
            "id": 1,
            "topic": "Generative AI & Prompt Engineering",
            "students_enrolled": "15k+",
            "trend_status": "Hot",
            "image": "https://i.ibb.co.com/Z6fHRR0F/image.png",
            "description": "Master the art of communicating with AI to automate tasks and create content."
        },
        {
            "id": 2,
            "topic": "Full-Stack Web Development",
            "students_enrolled": "25k+",
            "trend_status": "Trending",
            "image": "https://i.ibb.co.com/0R8wSJqX/image.png",
            "description": "The evergreen demand for Next.js, React, and Node.js developers in 2026."
        },
        {
            "id": 3,
            "topic": "Cybersecurity & Ethical Hacking",
            "students_enrolled": "10k+",
            "trend_status": "New High",
            "image": "https://i.ibb.co.com/3mm6n0hH/image.png",
            "description": "Learn to protect digital infrastructures from modern security threats."
        }
    ]
    return (
        <div className=' bg-[#2d2a5b] py-10 my-20'>
            <div className='w-10/12 mx-auto mb-6 flex items-center gap-3'>
                <h1 className='text-3xl font-bold text-[#ffffff]'>Trending Courses</h1>
                <span className='badge badge-lg bg-pink-600 border-pink-800 text-white font-semibold animate-pulse '>Hot 🔥</span>
            </div>

            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center' >
                {
                    hotTopics.map(topic =>
                        <motion.div key={topic.id} className='shadow-sm shadow-pink-100'

                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                damping: 20,
                                delay: 0.1,
                                duration: 0.8
                            }}
                        >
                            <div className="card bg-[#42406c]  shadow-xl  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 cursor-pointer ">
                                <figure className='relative'>
                                    <Image
                                        src={topic.image}
                                        alt="image"
                                        width={400}
                                        height={400}
                                        className='object-cover w-full h-50'
                                    />
                                    <div className="absolute top-4 right-4">

                                        <span className='badge badge-lg bg-pink-600 border-pink-800 text-white font-semibold animate-pulse '>BEST SELLER</span>

                                    </div>
                                </figure>
                                <div className="card-body text-white">
                                    <h2 className="card-title">{topic.topic}</h2>
                                    <p>{topic.description}</p>
                                    <div className="card-actions justify-end">
                                        <p>Students enrolled : <span className='text-yellow-500'>
                                            {topic.students_enrolled}
                                        </span> </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>)
                }
            </div>

        </div>
    );
};

export default Trending;