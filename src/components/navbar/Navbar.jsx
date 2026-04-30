'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGraduationCap } from "react-icons/fa";
import UserPng  from '@/assets/user.png'



const Navbar = () => {
      const pathname = usePathname()
const links = <>
     <li className={` ${pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : ''} text-lg font-bold`}>
        <Link href='/'>Home</Link>
     </li>
     <li className={` ${pathname === '/courses' ? 'text-blue-600 border-b-2 border-blue-600' : ''} text-lg font-bold`}>
        <Link href='/courses'>Courses</Link>
     </li>
     <li className={` ${pathname === '/profile' ? 'text-blue-600 border-b-2 border-blue-600' : ''} text-lg font-bold text-[#c6237b]`}>
        <Link href='/profile'>Profile</Link>
     </li>
</>




    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50" >
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <p className="btn btn-ghost font-bold text-2xl flex items-center text-blue-600">
                        <FaGraduationCap />
                        <span>SkillSphere</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4 mx-2">
                    <div className="hidden lg:flex" >
                        <h1>Welcome ! <span>Aritro</span></h1>

                    </div>
                    <div>
                         <Image
                            src={UserPng}
                            alt="user photo"
                            width={40}
                            height={40}
                        />
                    </div>
                    <Link href={'/'} className="px-5  text-lg font-semibold text-blue-600 py-2 border-2 border-blue-600 rounded-3xl btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;