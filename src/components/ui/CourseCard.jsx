import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { FaStar, FaUser } from "react-icons/fa6";


const CourseCard = ({ course }) => {
    const { title, instructor, rating, category ,image } = course;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 cursor-pointer">
                <figure>
                    <Image
                        src={image}
                        alt={title}
                         width={400}
                         height={400}

                         className="object-cover w-full h-50"
                        />
                </figure>
                <div className="p-3 space-y-2">
                    <h2 className="card-title font-bold">{title}</h2>

                   <div className="flex justify-between">
                    <h1 className="flex items-center gap-1 font-semibold"><span className="text-blue-700 font-bold"><FaUser /></span> {instructor}</h1>

                    <p className="flex items-center gap-1 font-semibold"><span className="text-yellow-500 font-bold"><FaStar /></span> {rating}</p>

                   </div>

                    <div className="card-actions justify-end mt-5">
                        <button className="btn btn-outline btn-primary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;