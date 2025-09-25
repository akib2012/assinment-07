import React from 'react';
import Igm1 from '../assets/Clip path group.png'
import Img2 from '../assets/vector1.png'

const Box = ({ cardClicked, resolvers }) => {
    return (
        <div className='flex justify-between container rounded-xl '>
            <div>
                <div className='bg-black max-w-[700px] my-[50px] h-[250px]  bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] relative'>
                    <div className='flex gap-3 items-center'>
                        <img src={Img2} className='w-full' alt="" />
                        <img src={Igm1} className='w-full' alt="" />
                    </div>
                    <div className=' absolute left-50 top-20'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl text-white'>In-Progress</h3>
                            <p className='text-4xl text-white'>{cardClicked.length}</p>
                        </div>

                    </div>

                </div>

            </div>

            <div>
                <div className='bg-black max-w-[700px] my-[50px] h-[250px] bg-gradient-to-r from-[#54CF68]  to-[#00827A] rounded-xl relative'>
                    <div className='flex gap-3 items-center'>
                        <img src={Img2} className='w-full' alt="" />
                        <img src={Igm1} className='w-full' alt="" />
                    </div>
                    <div className=' absolute left-50 top-20'>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-4xl text-white'>Resolved</h3>
                            <p className='text-4xl text-white'>{resolvers.length}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Box;