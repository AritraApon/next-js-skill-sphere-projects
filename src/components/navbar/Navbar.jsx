'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGraduationCap, FaUserPlus } from "react-icons/fa";
import UserPng  from '@/assets/user.png'
import { authClient } from "@/lib/auth-client";
import { HiLogin, HiOutlineLogin } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";



const Navbar = () => {
 const pathname = usePathname()
 
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    if(isPending){
        return <div><span className="loading loading-spinner loading-lg"></span></div>
    }

   const user = session?.user

   console.log(user)


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
                    <p className="btn btn-ghost font-bold text-lg lg:text-2xl flex items-center text-blue-600">
                        <FaGraduationCap />
                        <span>SkillSphere</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>

                {user ?  <div className="navbar-end gap-4 mx-2">
                    <div className="hidden lg:flex" >
                        <h1>Welcome ! <span className="text-pink-800">{user?.name || 'User'}</span></h1>

                    </div>
                    <div>
                         <Image
                            src={user?.image ||  UserPng}
                            alt="user photo"
                            width={40}
                            height={40}
                            className=" rounded-full w-10 object-cover h-10"
                        />
                    </div>

       <div className="hidden lg:flex">
 <button   onClick={() => authClient.signOut()}  className="px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-full 
             transition-all duration-300 ease-in-out
             hover:bg-red-500 hover:text-white active:scale-95 shadow-sm hover:shadow-md"> LogOut </button>
       </div>
       <div className="flex lg:hidden">
 <button   onClick={() => authClient.signOut()}  className="px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-full 
             transition-all duration-300 ease-in-out
             hover:bg-red-500 hover:text-white active:scale-95 shadow-sm hover:shadow-md"> <IoLogOut className="text-xl" /> </button>
       </div>


                </div> :



                <div className="navbar-end gap-4 mx-2">
       <div className="hidden lg:flex">
      <Link href={'/login'} className="px-6 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-full 
             transition-all duration-300 ease-in-out
             hover:bg-blue-500 hover:text-white active:scale-95 shadow-sm hover:shadow-md flex items-center gap-2.5">
                <HiLogin className="text-xl" />
                Login
             </Link>
       </div>
       <div className="flex lg:hidden">
      <Link href={'/login'} className="px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-full 
             transition-all duration-300 ease-in-out
             hover:bg-blue-500 hover:text-white active:scale-95 shadow-sm hover:shadow-md flex items-center gap-2.5">
                <HiOutlineLogin className="text-xl" />

             </Link>
       </div>


             <div className="hidden lg:flex">
                <Link href={'/register'} className="flex items-center gap-2.5 px-6 py-2.5 
                       bg-primary text-white font-semibold
                       rounded-full transition-all duration-300
                       ease-in-out hover:bg-secondary active:scale-95
                       shadow-md hover:shadow-lg">
      <FaUserPlus className="text-xl" />
      <span>Register</span>
    </Link>
             </div>
             <div className="flex lg:hidden">
                <Link href={'/register'} className="flex items-center gap-2.5 px-4 py-2.5 
                       bg-primary text-white font-semibold
                       rounded-full transition-all duration-300
                       ease-in-out hover:bg-secondary active:scale-95
                       shadow-md hover:shadow-lg">
      <FaUserPlus className="text-xl" />

    </Link>
             </div>
                </div> }

            </div>
        </div>
    );
};

export default Navbar;