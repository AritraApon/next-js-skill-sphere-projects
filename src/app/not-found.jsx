import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">

            <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest animate-bounce">
                404
            </h1>


            

            <div className="mt-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Oops! You're lost in space.
                </h2>
                <p className="text-gray-500 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>


                <Link href="/">
                    <button className="btn btn-primary btn-lg shadow-lg hover:shadow-blue-200 normal-case px-8">
                        Back to Homepage
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default NotFoundPage;