import React from 'react';

const LearningTips = () => {
    const studentTips = [
        {
            "id": 1,
            "title": "Master Consistency",
            "description": "Studying for 1 hour every day is more effective than pulling a 10-hour marathon once a week. Small steps lead to big results.",
            "icon": "📅",
            "tag": "Productivity"
        },
        {
            "id": 2,
            "title": "Learn by Doing",
            "description": "Don't just watch tutorials; build real-world projects. Applying what you learn is the fastest way to master a new skill.",
            "icon": "🚀",
            "tag": "Practical"
        },
        {
            "id": 3,
            "title": "Engage with Peers",
            "description": "Join discussion forums and study groups. Explaining concepts to others and asking questions solidifies your own understanding.",
            "icon": "🤝",
            "tag": "Community"
        }
    ]

    return (
        <div>
            <div>
                <p className=''>Master Your Learning Journey</p>
                <p>Achieving your goals is a marathon, not a sprint. Follow these core principles to excel.</p>
            </div>

            <div>
                {
                    studentTips.map(tips =>
                        <div key={tips.id}>
                            <div className="card bg-base-100 w-auto lg:w-96 shadow-md hover:shadow-xl hover:shadow-violet-400 transition-all duration-300 border border-gray-100">
                                <figure className="px-10 pt-10 ">
                                    <span className='w-40'>  {tips.icon} </span>

                                </figure>
                                <div className="card-body items-center text-center">

                                    <h2 className="card-title text-blue-600">{tips.title}</h2>
                                    <p className="font-medium text-gray-500">{tips.description}</p>
                                    {/* <p className="text-sm line-clamp-2">{instructor.bio}</p> */}


                                </div>

                            </div>
                        </div>




                    )
                }
            </div>

        </div>
    );
};

export default LearningTips;