import React from 'react';
import sleeping from '../../../images/sleeping.png'

const NotFound = () => {
    return (
        <div className='text-center'>
            <h5 className='text-primary mt-4 '>The page you are looking for is not found</h5>
            <img className='w-25' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;