import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className='flex justify-center mt-4'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl my-8'>Sorry, this page isn't available.</h1>
                <p>The link you followed may be broken, or the page may have been removed. <Link to='/'><span className='text-blue-400'>Go back to Instagram.</span></Link></p>
            </div>
        </div>
    )
}

export default NotFoundPage;