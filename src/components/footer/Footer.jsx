import Link from 'next/link';
import React from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { FaEarthAfrica } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <footer className="footer sm:footer-horizontal items-center bg-[#f8fafc] text-base-content p-10">
                <aside>
                      <p className="btn btn-ghost font-bold text-lg lg:text-2xl flex items-center text-blue-600">
                                             <FaGraduationCap />
                                             <span>SkillSphere</span></p>
                    <p>
                       © 2026 Skill Sphere. Empowering the next <br /> generation of leaders through accessible, high- <br /> quality online education
                    </p>
                </aside>
                <div className='flex items-center gap-10'>
                    <Link href={'/'}> <p className='text-xl text-gray-600 hover:text-blue-600'>Home</p></Link>
                    <Link href={'/courses'}> <p className='text-xl text-gray-600 hover:text-blue-600'>Courses</p></Link>
                    <Link href={'/profile'}> <p className='text-xl text-gray-600 hover:text-blue-600'>Profile</p></Link>

                </div>
                <div className='flex items-center gap-3'>
                    <button className='btn rounded-full text-blue-600 border-2 border-blue-700 text-xl py-4 px-3'><BsFillShareFill /></button>
                    <button className='btn rounded-full text-blue-600 border-2 border-blue-700 text-xl py-4 px-3'><FaEarthAfrica /></button>
                </div>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} -Skill Sphere | Designed & Developed by Aritro Mazumdar</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;