import CourseData from '../../../public/course.json';

const DetailsPage = async({params}) => {
    const {id} = await params
     const course = CourseData.find(friend => friend.id === parseInt(id));
      const {  title, instructor, rating, category, image ,duration,level ,description } = course;
    return (
        <div>

        </div>
    );
};

export default DetailsPage;