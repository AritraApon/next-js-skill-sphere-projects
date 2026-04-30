import Courses from "@/components/courses/Courses";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Courses/>
    </div>
  );
}
