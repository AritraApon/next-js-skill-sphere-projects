import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";


const ProfilePage = () => {
    // Note: Use states (useState) to handle real-time updates for Name and Image
    const user = {
        name: "Aritro Mazumder",
        email: "aritro@example.com",
        image: "https://i.ibb.co.com/cSBhwLzm/image.png"
    };

    return (
        <div className="">
<div className="min-h-[80vh] flex items-center justify-center  p-4">
            {/* Profile Card */}
            <div className="card w-full max-w-md bg-[#f4d9e8] shadow-xl border border-gray-100">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.image} alt="Profile" />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold text-gray-800">{user.name}</h2>
                    <p className="text-gray-500 text-lg font-medium">{user.email}</p>

                    <div className="card-actions mt-6">
                        {/* The button to open modal */}
                        <label htmlFor="edit-profile-modal" className="btn btn-primary btn-outline px-8 rounded-full">
                            Edit Profile
                        </label>
                    </div>
                </div>
            </div>

            {/* DaisyUI Modal Structure */}
            <input type="checkbox" id="edit-profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="edit-profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-xl mb-6 text-blue-600">Update Profile</h3>

                    <div className="space-y-4">
                        {/* Name Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                defaultValue={user.name}
                                className="input input-bordered w-full focus:border-blue-500"
                            />
                        </div>

                        {/* Image URL Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Profile Image URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="https://example.com/photo.jpg"
                                defaultValue={user.image}
                                className="input input-bordered w-full focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="edit-profile-modal" className="btn btn-primary w-full shadow-lg">
                            Update Profile
                        </label>
                    </div>
                </div>
            </div>

        </div>
        <div className=' flex  items-center justify-center mt-6 '>
                    <Link href={'/'}>
                        <button className='btn btn-primary text-white  text-xl  flex items-center'><FaArrowCircleLeft /> Back </button>
                    </Link>
                </div>
        </div>

    );
};

export default ProfilePage;