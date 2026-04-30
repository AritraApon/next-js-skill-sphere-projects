import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { FaStar, FaUser } from "react-icons/fa6";


const CourseCard = ({ course }) => {
    const { id, title, instructor, rating, category, image } = course;
  
    return (
        <div >
            <div className="card bg-base-100  shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 cursor-pointer">
                <figure className="bg-violet-200 relative">
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={400}

                        className="object-cover w-full h-60"
                    />
                    <div className="absolute top-3 right-3">
                        <span className={`badge badge-lg font-semibold border-none ${category === "Development" ? "bg-blue-500 text-white" :
                                category === "Design" ? "bg-pink-500 text-white" :
                                    category === "Data Science" ? "bg-purple-600 text-white" :
                                        category === "Marketing" ? "bg-orange-500 text-white" :
                                            category === "IT & Software" ? "bg-green-600 text-white" :
                                                category === "Business" ? "bg-yellow-500 text-black" :
                                                    "bg-gray-500 text-white"
                            }`}>
                            {category}
                        </span>
                    </div>
                </figure>
                <div className="p-3 space-y-2">
                    <h2 className="card-title font-bold">{title ? title : 'Title'}</h2>

                    <div className="flex justify-between">
                        <h1 className="flex items-center gap-1 font-semibold"><span className="text-blue-700 font-bold"><FaUser /></span> {instructor}</h1>

                        <p className="flex items-center gap-1 font-semibold"><span className="text-yellow-500 font-bold"><FaStar /></span> {rating}</p>

                    </div>

                    <div className="card-actions justify-end mt-5 ">
                        <Link href={`/${id}`} className="block w-full">
                            <button className="btn btn-outline btn-primary w-full ">Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;