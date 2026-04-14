import React from 'react';

const Cards = () => {
    return (
       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 mx-30">

           <div className="text-center shadow-xl p-10 ">
                <h2 className='text-[#244D3F] '>10</h2>
                <p className='opacity-80'>Total Friends</p>
            </div>
               <div className="text-center shadow-xl p-10 ">
               <h2 className='text-[#244D3F]'>3</h2>
                 <p className='opacity-80'>On Track</p>
            </div>
             <div className="text-center shadow-xl p-10 ">
              <h2 className='text-[#244D3F]'>6</h2>
                 <p className='opacity-80'>Need Attention</p>
            </div>
                <div className="text-center shadow-xl p-10 ">
                <h2 className='text-[#244D3F]'>12</h2>
                 <p className='opacity-80'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Cards;