'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";
import Profile from '@/assets/user.png'
import { motion } from 'framer-motion';


const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
      const user = session?.user;

if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="">
<div className="min-h-[80vh] flex items-center justify-center  p-4">

            <motion.div className="card w-full max-w-md bg-[#f4d9e8] shadow-xl border border-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image src={user?.image || '' } alt="Profile"  width={400} height={400} />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold text-gray-800">{user?.name || Profile}</h2>
                    <p className="text-gray-500 text-lg font-medium">{user?.email}</p>

                    <div className="card-actions mt-6">
                        {/* The button to open modal */}
                        <Link href={'/updateprofile'} className="btn btn-primary btn-outline px-8 rounded-full">
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </motion.div>

        </div>
        <div className=' flex  items-center justify-center mt-6 '>
                    <Link href={'/'}>
                        <button className='btn btn-primary text-white  text-xl  flex items-center'><FaArrowCircleLeft /> Back </button>
                    </Link>
                </div>
        </div>

    );
};

export default ProfilePage;