import { use } from "react";


const Tickets = ({ FetchTicketsData }) => {
    const datalists = use(FetchTicketsData);
    console.log(datalists);

    return (
        <div className=' col-span-8 '>

            <h3>Customer Tickets</h3> <br />
            <div className="grid grid-cols-2 mx-auto gap-5 my-6">
                {
                    datalists.map((list) => {
                        return (

                          
                                <div className="bg-white shadow rounded-lg p-4 w-[500px]">
                                    {/* Title & Status */}
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-lg font-semibold text-gray-900">
                                            Login Issues - Can't Access Account
                                        </h2>
                                        <span className="flex items-center gap-1 bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                                            Open
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mt-2">
                                        Customer is unable to log in to their account. They've tried resetting
                                        their password multiple times but still...
                                    </p>

                                    {/* Footer */}
                                    <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-500">#1001</span>
                                            <span className="text-red-600 font-semibold">HIGH PRIORITY</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>John Smith</span>
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
                                                <span>1/15/2024</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                           


                        )
                    })
                }
            </div>
        </div>
    );
};

export default Tickets;