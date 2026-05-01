
"use client"
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { createAuthClient } from "better-auth/react";
import { motion } from 'framer-motion';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const authClient = createAuthClient();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        const { email, password } = data

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        // console.log(res , error)
        if (res) {
            toast.success('Successfully Login')
        }

        if (error) {
            toast.error(error?.message)
        }
    }



    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        if (data) {
            toast.success('Successfully login ')
        }
    };

    return (
        <div>
            <motion.div className="flex justify-center items-center min-h-[80vh] mx-4  "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >

                <div className="bg-[#dec6f748] mb-2 p-6 sm:p-10 shadow-xl rounded-2xl w-full sm:max-w-125 space-y-3 hover:shadow-violet-200 transition-shadow">

                    <div>
                        <h1 className="font-bold text-stone-600 text-xl sm:text-2xl text-center mb-6">
                            Login <span className="text-violet-500">with account</span>
                        </h1>
                    </div>

                    <div className="divider"></div>

                    <div>
                        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)} >

                            {/* Email Field */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-base sm:text-lg text-gray-500">Email address</legend>
                                <input
                                    type="email"
                                    className="input w-full border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                                    placeholder="Enter your Email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <p className="text-xs text-red-500 mt-1">Please Enter your email address</p>}
                            </fieldset>

                            {/* Password Field */}
                            <fieldset className="fieldset relative">
                                <legend className="fieldset-legend text-base sm:text-lg text-gray-500">Password</legend>

                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="input w-full pr-10 border-gray-300 focus:border-orange-400"
                                        placeholder="Enter your Password"
                                        {...register("password", { required: true })}
                                    />

                                    {/* Toggle Button */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
                                    >
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </button>
                                </div>

                                {errors.password && <p className="text-xs text-red-500 mt-1">Please Enter your Password</p>}

                                <button className="btn bg-violet-500 hover:bg-violet-600 text-white w-full mt-6 border-none">
                                    Login
                                </button>
                            </fieldset>

                            <p className="text-center text-sm sm:text-base mt-4">
                                Don’t Have An Account? <Link href={'/register'} className="text-blue-500 font-semibold hover:underline">Register</Link>
                            </p>
                        </form>

                        <div className="mt-6">
                            <button onClick={signIn}
                                className="btn btn-outline w-full text-blue-500 border-blue-500 hover:bg-blue-50 hover:text-blue-600 rounded-xl flex items-center justify-center gap-2"

                            >
                                <FaGoogle />
                                <span>Login with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;