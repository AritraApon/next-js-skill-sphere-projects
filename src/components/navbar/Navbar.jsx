'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGraduationCap, FaUserPlus } from "react-icons/fa";
import UserPng from '@/assets/user.png'
import { authClient } from "@/lib/auth-client";
import { HiLogin, HiOutlineLogin } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { toast } from "react-toastify";

const Navbar = () => {
    //  hooks
    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleLogOut = async() => {
      await  authClient.signOut()
        toast.success('Logged out successfully')

    }
    //  Navigation links
    const links = (
        <>
            <li className={`${pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : ''} text-lg font-bold`}>
                <Link href='/'>Home</Link>
            </li>
            <li className={`${pathname === '/courses' ? 'text-blue-600 border-b-2 border-blue-600' : ''} text-lg font-bold`}>
                <Link href='/courses'>Courses</Link>
            </li>
            <li className={`${pathname === '/profile' ? 'text-blue-600 border-b-2 border-blue-600' : ''} text-lg font-bold text-[#c6237b]`}>
                <Link href='/profile'>Profile</Link>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="btn btn-ghost font-bold text-lg lg:text-2xl flex items-center text-blue-600">
                        <FaGraduationCap />
                        <span>SkillSphere</span>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-4 mx-2">
                    {/* User Profile   */}
                    {isPending ? (
                        <div><span className="loading loading-spinner loading-md"></span></div>
                    ) : user ? (
                        <>
                            <div className="hidden lg:flex">
                                <h1>Welcome! <span className="text-pink-800">{user?.name || 'User'}</span></h1>
                            </div>
                            <Image
                                src={user?.image || UserPng}
                                alt="user photo"
                                width={40}
                                height={40}
                                className="rounded-full w-10 h-10 object-cover"
                            />
                            {/* LogOut Buttons */}
                            <button
                                onClick={handleLogOut}
                                className="hidden lg:flex px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white active:scale-95 shadow-sm"
                            >
                                LogOut
                            </button>
                            <button
                                onClick={handleLogOut}
                                className="flex lg:hidden px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white active:scale-95"
                            >
                                <IoLogOut className="text-xl" />
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Login  */}
                            <Link href='/login' className="hidden lg:flex px-6 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white active:scale-95 flex items-center gap-2.5">
                                <HiLogin className="text-xl" /> Login
                            </Link>
                            <Link href='/login' className="flex lg:hidden px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white active:scale-95">
                                <HiOutlineLogin className="text-xl" />
                            </Link>

                            {/* Register */}
                            <Link href='/register' className="hidden lg:flex items-center gap-2.5 px-6 py-2.5 bg-primary text-white font-semibold rounded-full transition-all duration-300 hover:bg-secondary active:scale-95 shadow-md">
                                <FaUserPlus className="text-xl" /> <span>Register</span>
                            </Link>
                            <Link href='/register' className="flex lg:hidden items-center gap-2.5 px-4 py-2.5 bg-primary text-white font-semibold rounded-full transition-all duration-300 hover:bg-secondary active:scale-95 shadow-md">
                                <FaUserPlus className="text-xl" />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;