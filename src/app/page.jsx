import Courses from "@/components/Home/courses/Courses";
import Faqs from "@/components/Home/faqs/Faqs";
import Hero from "@/components/Home/hero/Hero";
import Instructors from "@/components/Home/instructors/Instructors";
import LearningTips from "@/components/Home/learningtips/LearningTips";
import Trending from "@/components/Home/trending/Trending";



export default function Home() {
  return (
    <div>
      <Hero />
      <Courses />
     <Instructors/>
     <Trending/>
     <LearningTips/>
     <Faqs/>
    </div>
  );
}
