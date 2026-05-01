'use client'

import Image from "next/image";
import HeroPng from '@/assets/hero.jpg'
import { IoLogoIonic } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import {motion} from 'framer-motion'


const Hero = () => {


    return (
        <div className="bg-[#f0eaf6] container mx-auto overflow-hidden px-4">
            <div className="hero  min-h-8xl py-20 rounded-b-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-70 ">
                    <motion.div className="shadow-blue-300 shadow-2xl animate-pulse"
               initial={{x:20 , opacity:0}}
               animate={{x:0 , opacity:1}}
               transition={{duration:0.8 , ease:'easeOut' , delay:0.2}}
                    >
                        <Image
                            src={HeroPng}
                            alt="hero photo"
                            width={300}
                            height={300}
                            className="max-w-sm w-full rounded-lg shadow-2xl"
                        />
                    </motion.div>
                    <motion.div className=""
                    initial={{x:-40 , opacity:0}}
                    animate={{x:0 , opacity:1}}
                    transition={{duration:0.8 , ease:'easeIn' ,delay:0.1}}
                    >
                        <button className="mb-4 animate-bounce">
                            <span className="bg-[#ddd3f9] text-xs text-[#693bf1] px-3 py-1 rounded-2xl flex items-center gap-1 "> <span className="block"><IoLogoIonic /></span>
                                Empower Your Future Self</span>
                        </button>

                        <motion.div

                        >
                            <h1 className="text-3xl md:text-5xl font-extrabold space-y-2 ">Upgrade Your Skill  to <br />Master Your <br />
                                <span className="text-blue-700">Future</span></h1>
                        </motion.div>
                        <p className="py-6">
                            Explore world-class courses from industry experts. Start your journey <br /> today and unlock your potential with Skill Sphere's premium learning <br /> experience.
                        </p>

                        <div className="flex gap-3">
                            <motion.button className="btn rounded-full bg-linear-to-r  from-[#ef499c] to-[#bb1a73] text-white text-lg font-semibold py-6 px-8 hover:bg-linear-to-r hover:from-violet-500 hover:to-blue-500 "
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}

                            >Join Now</motion.button>

                            <button className="btn rounded-full border-2 border-blue-100 text-lg font-semibold py-6 px-8 hover:bg-linear-to-r hover:bg-violet-50 flex items-center gap-2">
                               <FaPlayCircle /> Watch Demo</button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;