

const Faqs = () => {
    return (
        <div className="bg-[#f0eaf6] py-8 my-20">
         <div className="max-w-4xl mx-auto  px-4 ">
    <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-500">Everything you need to know about our learning platform.</p>
    </div>

    <div className="space-y-4">

        <div className="collapse collapse-plus bg-base-200 border border-gray-100 shadow-sm">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium text-blue-600">
                How do I get my certificate after finishing a course?
            </div>
            <div className="collapse-content">
                <p className="text-gray-600">Once you complete all the modules and assignments of a course, a "Download Certificate" button will appear on your dashboard automatically.</p>
            </div>
        </div>


        <div className="collapse collapse-plus bg-base-200 border border-gray-100 shadow-sm">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-blue-600">
                Can I access the courses offline?
            </div>
            <div className="collapse-content">
                <p className="text-gray-600">Yes! Through our mobile app, you can download course videos and materials to study even when you don't have an internet connection.</p>
            </div>
        </div>


        <div className="collapse collapse-plus bg-base-200 border border-gray-100 shadow-sm">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-blue-600">
                Is there a refund policy?
            </div>
            <div className="collapse-content">
                <p className="text-gray-600">We offer a 7-day money-back guarantee if you are not satisfied with the course content, no questions asked.</p>
            </div>
        </div>
    </div>
</div>
        </div>


    );
};

export default Faqs;