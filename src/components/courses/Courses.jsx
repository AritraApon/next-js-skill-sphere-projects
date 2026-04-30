import { FaSquareArrowUpRight } from 'react-icons/fa6';
import data from '../../../public/course.json'
import Link from 'next/link';
import CourseCard from '../ui/CourseCard';

const Courses = () => {
    return (
        <div className='my-10'>
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className='space-y-2'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold'>Popular Courses</h1>
                    <p className='text-sm'>The most sought-after skills in the industry right now.</p>
                </div>
                <div>
                    <div className='hidden lg:flex'>
                        <Link href={'/courses'}>
                            <button className='btn btn-primary flex items-center'>View all <FaSquareArrowUpRight /> </button>
                        </Link>
                    </div>
                    <div className='flex lg:hidden'>
                        <Link href={'/courses'}>
                            <button className=' btn btn-primary flex items-center'> <FaSquareArrowUpRight /> </button>
                        </Link>
                    </div>


                </div>
            </div>

            <div className='w-11/12 mx-auto flex flex-col lg:flex-row justify-around  mt-5'>
                {
                    data.slice(0, 3).map(course =><CourseCard
                      key={course.id} course={course}
                    />)
                }
            </div>
        </div>
    );
};

export default Courses;