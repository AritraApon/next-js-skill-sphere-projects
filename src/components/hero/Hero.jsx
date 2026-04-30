import Image from "next/image";
import HeroPng from '@/assets/hero.jpg'
import { IoLogoIonic } from "react-icons/io";

const Hero = () => {
    return (
        <div>
            <div className="hero bg-[#f0eaf6] min-h-8xl py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={HeroPng}
                        alt="hero photo"
                        width={400}
                        height={400}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="">
                      <button className="mb-2">
                          <span className="bg-[#ddd3f9] text-xs text-[#693bf1] px-3 py-1 rounded-2xl flex items-center gap-1 "> <span className="block"><IoLogoIonic /></span>
                            Empower Your Future Self</span>
                      </button>

                       <div>
                         <h1 className="text-5xl font-bold">Box Office News!</h1>
                       </div>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;