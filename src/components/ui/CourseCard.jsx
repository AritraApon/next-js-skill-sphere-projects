import Image from "next/image";


const CourseCard = ({ course }) => {
    const { title, instructor, rating, category ,image } = course;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={image}
                        alt={title}
                         width={400}
                         height={400}
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;