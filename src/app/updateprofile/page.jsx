'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaArrowCircleLeft } from 'react-icons/fa';

const UpdateProfile = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { name, photo, } = data;
        console.log(data)

        const { data: res, error } = await authClient.updateUser({
            image: photo,
            name: name,
        })

        if (res) {
            toast.success('Your profile successfully Update')
            setTimeout(() => {
                router.push('/profile');
            }, 1000);
        }

        if (error) {
            toast.error(error?.message || 'Something went wrong!');
        }


    }

    return (
        <div>
            <motion.div className="flex justify-center items-center min-h-[80vh] mx-3 my-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}>


                <div className="bg-[#d0b0ef52] p-6 sm:p-10 shadow-xl rounded-2xl w-full sm:max-w-125 space-y-3 hover:shadow-violet-200 transition-shadow">
                    <div>
                        <h1 className="font-bold text-stone-600 text-2xl text-center mb-6">Edit <span className="text-violet-500">your profile</span></h1>
                    </div>
                    <div className="divider"></div>
                    <div>

                        <form className="mt-6 space-y-2" onSubmit={handleSubmit(onSubmit)} >
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg text-gray-500">Your Name</legend>
                                <input type="text"
                                    className="input w-full"
                                    placeholder="Enter your Name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <p className="label text-red-500">Please enter your name</p>}


                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg text-gray-500">Photo url</legend>
                                <input type="text"
                                    className="input w-full"
                                    placeholder="Enter your photo url"
                                    {...register("photo", { required: true })}
                                />
                                {errors.photo && <p className="label text-red-500">Please Enter your photo url</p>}


                            </fieldset>
                            <div className="flex items-center gap-4 mt-6">

                                <button className="flex-1 btn bg-violet-600 hover:bg-violet-700 text-white text-lg font-semibold border-none transition-all duration-300 shadow-md">
                                    Update
                                </button>


                                <Link href={'/profile'} className="flex-1">
                                    <button className="w-full btn btn-outline border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white text-lg font-semibold transition-all duration-300">
                                       Cancel
                                    </button>
                                </Link>
                            </div>

                        </form>

                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default UpdateProfile;