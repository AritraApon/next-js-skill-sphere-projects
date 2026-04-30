import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div>
            login page
            <Link href={'/register'}>
            <button className='btn btn-success'>Register</button>
            </Link>
        </div>
    );
};

export default LoginPage;