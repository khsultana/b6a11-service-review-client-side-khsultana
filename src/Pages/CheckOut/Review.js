import React from 'react';
import { FaComment, FaStar } from 'react-icons/fa';

const Review = ({ rev }) => {
    const { reviews, name, img } = rev;
    return (
        <div className=' m-6 border-4 mb-3'>

            <div className='m-3 flex items-center justify-start gap-3 mt-3 mb-3'>
                <img className='h-14 rounded-full' src={img} alt="" />
                <p className='font-semibold'>{name}</p>

                <p className='text-orange-600 flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </p>

            </div>
            <div>   <p className='m-3 font-semibold flex items-center gap-2'>  <FaComment />{reviews}</p></div>
        </div>
    );
};

export default Review;