import React, { useState } from 'react';

const Ticket = ({ list, cardClicked, setCardClicked, handleClicked, ResolverClicked, handleresolver }) => {
    // console.log(ResolverClicked);
    

    // const [cardClicked, setCardClicked] = useState(list);
    
    return (

        <div>

            <div onClick={() => handleClicked(list.displayId, list)} className="bg-white shadow rounded-lg p-4 w-[500px]">
                {/* Title & Status */}
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {list.title}
                    </h2>
                    <span className="flex items-center gap-1 bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                       {list.status}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">
                    {list.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500">{list.displayId}</span>
                        <span className="text-red-600 font-semibold">{list.priority}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>{list.customer}</span>
                        <span className="flex items-center gap-1">
                            <svg

                                className="h-4 w-4 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10m-12 4h14M5 21h14a2 2 0 002-2V7a2 
                                                    2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span>{list.createdAt}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>



    )
};

export default Ticket;