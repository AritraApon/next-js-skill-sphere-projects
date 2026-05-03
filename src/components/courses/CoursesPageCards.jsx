'use client'

import { useState } from "react";
import CourseCard from "../ui/CourseCard";
import { FaSearch } from "react-icons/fa";

const CoursesPageCards = ({ data }) => {
  const [inputTitle , setInputTitle] = useState('')
 const [searchTitle , setSearchTitle] = useState('')

  const filterCourses = data.filter(course => course.title.toLowerCase().includes(searchTitle.toLowerCase()))
  ;
  const handleSearch = () =>{
      setSearchTitle(inputTitle)
  }

    return (
        <div>
  <div className="flex justify-center my-8 px-4">
  <div className="join w-full max-w-lg shadow-lg border border-violet-300 rounded-2xl overflow-hidden  hover:shadow-violet-300 hover:border-violet-400">


    <div className="relative flex-1 flex items-center bg-white">

      <div className="absolute left-4 z-10 pointer-events-none">
        <svg
          className="h-5 w-5 text-violet-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      </div>

      <input
        type="search"
        required
        placeholder="Search courses..."
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        className="input join-item w-full pl-12 bg-white border-none focus:outline-none text-slate-700 font-medium h-14"
      />
    </div>


    <button
      onClick={handleSearch}
      className="btn join-item bg-violet-600 hover:bg-violet-700 border-none text-white px-6 h-14 flex items-center gap-2 transition-all duration-300"
    >
      <FaSearch className="text-lg" />
      <span className="hidden sm:inline">Search</span>
    </button>
  </div>
</div>

             { filterCourses.length > 0 ?
                 <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center gap-6 mt-8'>
                {
                    filterCourses.map(course => <CourseCard
                        key={course.id} course={course}
                    />)
                }
            </div> :

            <div className="w-10/12 mx-auto my-10 max-h-[80vh] shadow-2xl rounded-2xl bg-red-300 border-4 border-violet-500"><h3 className="text-5xl  text-center r py-20  font-bold text-gray-800 mb-2">
        No courses found
    </h3></div> }


        </div>
    );
};

export default CoursesPageCards;