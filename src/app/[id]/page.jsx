import Image from 'next/image';
import CourseData from '../../../public/course.json';
import { FaArrowCircleLeft, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { PacmanLoader } from 'react-spinners';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata = {
  title: "Skill Sphere || Course Details",
  description: "Master your future with Skill Sphere",
};

const DetailsPage = async ({ params }) => {

 const session = await auth.api.getSession({
        headers: await headers()
    })
  if (!session) {
    redirect('/login');
  }


    const { id } = await params
    const course = CourseData.find(course => course.id === parseInt(id));
  if (!course) {
    return <div className="flex justify-center items-center min-h-[60vh]">
<PacmanLoader

  color="#021cff"
  size={30}
/>
        </div>;
}
    const { title, instructor, rating, category, image, duration, level, description } = course;


    return (
        <div className='max-w-6xl mx-auto my-20'>

            <div className="max-w-6xl mx-auto my-12 px-4">
                <div className="card lg:card-side bg-base-100 shadow-2xl shadow-violet-300 border border-gray-100 overflow-hidden">

                    <figure className="lg:w-1/2">
                        <Image
                            src={image}
                            alt={title}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </figure>


                    <div className="card-body lg:w-1/2 p-8">

                        <div className="flex justify-between items-center mb-4">
                            {/* <span className="badge badge-primary badge-outline font-bold px-4 py-3">{category}</span> */}


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

                            <div className="flex items-center gap-1 text-orange-500 font-bold">
                                <span><FaStar /></span>
                                <span>{rating}</span>
                            </div>
                        </div>


                        <h1 className="text-3xl font-extrabold text-gray-800 leading-tight mb-2">
                            {title}
                        </h1>
                        <p className="text-lg font-medium text-blue-600 mb-6 flex items-center gap-2">
                            <span className="text-gray-400 text-sm">By</span> {instructor}
                        </p>


                        <div className="mb-6">
                            <h3 className="font-bold text-gray-700 mb-2">Course Overview:</h3>
                            <p className="text-gray-600 leading-relaxed italic border-l-4 border-violet-700-500 pl-4">
                                {description}
                            </p>
                        </div>


                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-blue-50 p-4 rounded-xl text-center">
                                <p className="text-xs text-gray-500 uppercase font-bold">Duration</p>
                                <p className="text-lg font-bold text-gray-800">{duration}</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl text-center">
                                <p className="text-xs text-gray-500 uppercase font-bold">Level</p>
                                <p className="text-lg font-bold text-gray-800">{level}</p>
                            </div>
                        </div>


                        <div className="card-actions mt-auto">
                            {/* <button   className="btn bg-linear-to-r  from-[#ef499c] to-[#bb1a73]  text-lg btn-block text-white font-bold shadow-lg hover:shadow-blue-200 hover:from-violet-500 hover:to-blue-500">
                                Enroll Now
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex  items-center justify-center mt-6 '>
                <Link href={'/courses'}>
                    <button className='btn btn-primary text-white  text-xl  flex items-center'><FaArrowCircleLeft /> Back </button>
                </Link>
            </div>

        </div>
    );
};

export default DetailsPage;