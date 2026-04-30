import CourseData from '../../../public/course.json';

const DetailsPage = async({params}) => {
    const {id} = await params
     const course = CourseData.find(friend => friend.id === parseInt(id));
    return (
        <div>
         {course.title}
        </div>
    );
};

export default DetailsPage;