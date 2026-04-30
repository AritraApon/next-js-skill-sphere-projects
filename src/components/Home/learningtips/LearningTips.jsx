import Image from 'next/image';
import React from 'react';

const LearningTips = () => {
    const studentTips = [
        {
            "id": 1,
            "title": "Master Consistency",
            "description": "Studying for 1 hour every day is more effective than pulling a 10-hour marathon once a week. Small steps lead to big results.",
            "image": "https://i.ibb.co.com/wHNpstK/image.png",
            "tag": "Productivity"
        },
        {
            "id": 2,
            "title": "Learn by Doing",
            "description": "Don't just watch tutorials; build real-world projects. Applying what you learn is the fastest way to master a new skill.",
            "image": "https://i.ibb.co.com/ksSRKwBb/image.png",
            "tag": "Practical"
        },
        {
            "id": 3,
            "title": "Engage with Peers",
            "description": "Join discussion forums and study groups. Explaining concepts to others and asking questions solidifies your own understanding.",
            "image": "https://i.ibb.co.com/CKSy1tCn/image.png",
            "tag": "Community"
        }
    ]

    return (
        <div className='my-10'>
            <div className='my-10 text-center'>
                <p className='font-bold text-blue-600 text-xl'>Master Your Learning Journey</p>
                <p>Achieving your goals is a marathon, not a sprint. Follow these core principles to excel.</p>
            </div>

            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-center'>
                {
                    studentTips.map(tips =>
                        <div key={tips.id}>
                            <div className="card bg-violet-100  shadow-xl  hover:shadow-2xl transition-all duration-300  group rounded-4xl border border-blue-400 ">

                                <div className="px-6 pt-8 flex justify-center">
                                    <div className="p-4 rounded-full border-2 border-blue-500">
                                        <div className="w-12 h-12 flex items-center justify-center text-3xl">

                                            <Image
                                                src={tips?.image}
                                                alt='icon'
                                                width={100}
                                                height={100}
                                                className="w-full rounder-full  object-cover "
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="card-body items-center text-center px-8 pb-8">
                                    <div className="badge badge-primary badge-outline text-xs font-bold mb-2">
                                        {tips.tag}
                                    </div>
                                    <h2 className="card-title text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                        {tips.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm leading-relaxed mt-2">
                                        {tips.description}
                                    </p>
                                </div>

                                <div className="h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 rounded-b-4xl"></div>
                            </div>
                        </div>




                    )
                }
            </div>

        </div>
    );
};

export default LearningTips;