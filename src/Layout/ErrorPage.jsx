import React from 'react';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex  justify-center items-center '>
            <p>Page Not found || 404 Error</p>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    );
};

export default ErrorPage;