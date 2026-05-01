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
            <div className="flex justify-center gap-2 items-center my-4 mx-4">
                <label className="input bg-violet-300 font-bold">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search title here"
                    value={inputTitle}
                     onChange={(e)=>setInputTitle(e.target.value)}

                    />
                </label>
                <button onClick={handleSearch} className="btn btn-info"><FaSearch /></button>
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