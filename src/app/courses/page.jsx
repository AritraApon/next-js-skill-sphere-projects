import CourseCard from '@/components/ui/CourseCard';
import data from '../../../public/course.json'
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const CoursesPage = () => {
    return (
        <div className='my-10'>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div className='hidden lg:flex   items-center mt-5 '>
                    <Link href={'/'}>
                        <button className=' text-violet-900 text-2xl  flex items-center cursor-pointer hover:text-orange-600'><FaArrowCircleLeft /> </button>
                    </Link>
                </div>
                <div>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold text-center'>All Courses</h1>
                    <p className='text-sm text-center'>The most sought-after skills in the industry right now.</p>
                </div>
                <div className=' hidden lg:flex  items-center mt-5 '>
                    <Link href={'/profile'}>
                        <button className=' text-violet-900 text-2xl  flex items-center cursor-pointer hover:text-orange-600'><FaArrowCircleRight /> </button>
                    </Link>
                </div>

            </div>


            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center gap-6 mt-8'>
                {
                    data.map(course => <CourseCard
                        key={course.id} course={course}
                    />)
                }
            </div>

             <div className=' flex  items-center justify-center mt-6 '>
                    <Link href={'/'}>
                        <button className='btn btn-primary text-white  text-xl  flex items-center'><FaArrowCircleLeft /> Back </button>
                    </Link>
                </div>
        </div>
    );
};

export default CoursesPage;