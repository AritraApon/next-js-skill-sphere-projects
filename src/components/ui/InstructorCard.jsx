import Image from "next/image";
import { FaStar, FaUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";


const InstructorCard = ({ instructor }) => {
    return (
        <div className="space-y-3">
            <div className="card bg-base-100 w-auto lg:w-96 shadow-md hover:shadow-xl hover:shadow-violet-400 transition-all duration-300 border border-gray-100">
                <figure className="px-10 pt-10">
                    <Image src={instructor.image}
                        alt={instructor.name}
                        width={50}
                        height={50}
                        className="rounded-full w-32 h-32 object-cover border-4 border-blue-100" />
                </figure>
                <div className="card-body items-center text-center">

                    <h2 className="card-title text-blue-600">{instructor.name}</h2>
                    <p className="font-medium text-gray-500">{instructor.role}</p>
                    <p className="text-sm line-clamp-2">{instructor.bio}</p>

                      <div className="flex gap-50">
                    <h1 className="flex items-center gap-1 text-xl font-semibold"><span className="text-blue-700 font-bold"><SiGoogleclassroom /></span> {instructor.total_courses}</h1>

                    <p className="flex items-center gap-1 text-xl  font-semibold"><span className="text-yellow-500 font-bold"><FaStar /></span> {instructor.rating}</p>

                </div>
                </div>

            </div>
        </div>
    );
};

export default InstructorCard;