import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='text-center'>
            <h1 className='text-5xl pt-16 pb-4'>Friends to keep close in your life</h1>
            <p className='opacity-80 pb-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
             relationships that matter most.</p>
             <div className='flex justify-center '>
                <button className='flex  items-center bg-[#244D3f] text-white p-2 rounded-sm '> <FaPlus /> Add a Friend</button>
             </div>
        </div>
    );
};

export default Banner;