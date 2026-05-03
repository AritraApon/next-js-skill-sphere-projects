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
       <div className="min-h-screen py-12 px-4 bg-[#fcf8ff]">
  <div className="flex flex-col items-center justify-center">

    <motion.div
      className="card w-full max-w-md bg-white shadow-2xl overflow-hidden rounded-[2.5rem] border border-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      <div className="h-32 w-full bg-linear-to-r from-violet-300 to-pink-300"></div>

      <figure className="relative -mt-20">
        <div className="avatar">
          <div className="w-40 rounded-full border-4 border-violet-600 shadow-lg overflow-hidden bg-white">
            <Image
              src={user?.image || Profile}
              alt="Profile"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </figure>

      <div className="card-body items-center text-center pb-10">
        <h2 className="card-title text-4xl font-extrabold bg-linear-to-l from-violet-600 to-pink-600 bg-clip-text text-transparent">
          {user?.name || "Profile Name"}
        </h2>

        <div className="badge badge-ghost mt-1 p-3 text-gray-600 text-lg font-semibold tracking-wide">
          {user?.email}
        </div>

        <div className="divider w-2/3 mx-auto opacity-50"></div>

        <div className="card-actions mt-4 w-full px-6">
          <Link href={'/updateprofile'} className="w-full">
            <button className="btn w-full bg-linear-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 border-none text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-violet-200 transition-all duration-300 transform hover:-translate-y-1">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </motion.div>

    {/* Back Button */}
    <div className="mt-10">
      <Link href={'/'}>
        <button className="group flex items-center gap-3 text-slate-500 hover:text-violet-600 font-bold transition-all duration-300">
          <FaArrowCircleLeft className="text-2xl group-hover:-translate-x-2 transition-transform duration-300" />
          <span className="text-xl">Back to Home</span>
        </button>
      </Link>
    </div>

  </div>
</div>

    );
};

export default ProfilePage;