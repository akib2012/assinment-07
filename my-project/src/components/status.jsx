import React, { use, } from 'react';

const Status = ({ crd, removecard, resolver }) => {
    // console.log(crd);

    const deletcards = () => {
        removecard(crd);
        resolver(crd);
        
        
    }



    return (
        <div className='mt-[30px]'>
            <div className=' bg-white h-fit p-3 rounded-xl '>
                <div className='p-3 bg-gray-100  rounded-2xl shadow mt-6'>
                    <h3>{crd.title}</h3>
                    <button  onClick={deletcards} className='bg-green-400 mt-8 w-full py-2 rounded-2xl font-semibold' type="button">complted</button>

                </div>
            </div>

        </div>
    );
};

export default Status;