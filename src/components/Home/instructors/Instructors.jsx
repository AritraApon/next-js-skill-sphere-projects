import InstructorCard from "@/components/ui/InstructorCard";
import Marquee from "react-fast-marquee";

const Instructors = () => {
    const instructors = [
    {
        "id": 1,
        "name": "Dr. Angela Yu",
        "role": "Lead Web Developer",
        "bio": "10+ years experience",
        "image": "https://i.ibb.co.com/fdPxWqd4/image.png",
        "total_courses": 15,
        "rating": 4.9
    },
    {
        "id": 2,
        "name": "Sarah Maynard",
        "role": "Senior UI/UX Designer",
        "bio": "8+ years experience",
        "image": "https://i.ibb.co.com/zTpn73Q1/image.png",
        "total_courses": 8,
        "rating": 4.8
    },
    {
        "id": 3,
        "name": "Maximilian Schwarz",
        "role": "React & Next.js Expert",
        "bio": "7+ years experience",
        "image": "https://i.ibb.co.com/hFy5mGLL/image.png",
        "total_courses": 22,
        "rating": 4.9
    },
    {
        "id": 4,
        "name": "Jose Portilla",
        "role": "Data Science Specialist",
        "bio": "12+ years experience",
        "image": "https://i.ibb.co.com/3tYRNyn/image.png",
        "total_courses": 12,
        "rating": 4.7
    },
    {
        "id": 5,
        "name": "Alex Cattoni",
        "role": "Digital Marketing Guru",
        "bio": "6+ years experience",
        "image": "https://i.ibb.co.com/yBxGS5pJ/image.png",
        "total_courses": 10,
        "rating": 4.6
    },
    {
        "id": 6,
        "name": "Nathan House",
        "role": "Cybersecurity Consultant",
        "bio": "24+ years experience",
        "image": "https://i.ibb.co.com/FbhLscDG/image.png",
        "total_courses": 18,
        "rating": 4.8
    }
]

    return (
        <div className="my-20 bg-[#f0eaf6] py-5">
            <div className="mt-10">
                <h1 className='text-3xl md:text-3xl lg:text-4xl font-extrabold text-center mb-4'>Meet Our Instructors</h1>

            </div>
            <Marquee pauseOnHover>
                <div className="hidden lg:flex my-10 gap-4">

                    {
                        instructors.map(instructor => <InstructorCard key={instructor.id} instructor={instructor} />
                        )
                    }

                </div>
            </Marquee>

            <div className=" grid grid-cols-1 items-center gap-5 mx-3 lg:hidden">
                 {
                        instructors.map(instructor => <InstructorCard key={instructor.id} instructor={instructor} />
                        )
                    }
            </div>
        </div>

    );
};

export default Instructors;