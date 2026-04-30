'use client'
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return (
        <div>
            <div className="flex justify-center items-center min-h-[80vh] mx-3 my-10">
                <div className="bg-[#d0b0ef52] p-6 sm:p-10 shadow-xl rounded-2xl w-full sm:max-w-125 space-y-3 hover:shadow-violet-200 transition-shadow">
                    <div>
                        <h1 className="font-bold text-stone-600 text-2xl text-center mb-6">Register <span className="text-violet-500">your account</span></h1>
                    </div>
                    <div className="divider"></div>
                    <div>
                        {/* onSubmit={handleSubmit(onSubmit)} */}
                        <form className="mt-6 space-y-2"  >
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


                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg text-gray-500">Email address</legend>
                                <input type="email"
                                    className="input w-full"
                                    placeholder="Enter your Email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <p className="label text-red-500">Please Enter your email address</p>}


                            </fieldset>

                            <fieldset className="fieldset relative">
                                <legend className="fieldset-legend text-lg text-gray-500">Password</legend>

                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="input w-full pr-10"
                                        placeholder="Enter your Password"
                                        {...register("password", { required: true })}
                                    />

                                    {/* Toggle Button */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
                                    >
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </button>
                                </div>

                                {errors.password && <p className="label text-red-500">Please Enter your Password</p>}

                                <button className="btn bg-violet-500 w-full  mt-4 text-lg text-white font-semibold hover:bg-violet-600">Register</button>
                            </fieldset>



                            <p className="text-center mt-3">Already have an account ?  <Link href={'/login'} className="text-blue-500"> Login</Link> here.

                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;