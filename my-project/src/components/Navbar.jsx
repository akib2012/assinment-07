import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-6 px-4 gap-4">
                    {/* Logo */}
                    <h2 className="text-xl font-bold">CS — Ticket System</h2>

                    {/* Navbar */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 w-full md:w-auto">
                        <ul className="flex flex-col md:flex-row gap-4 font-medium">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">FAQ</li>
                            <li className="cursor-pointer">Changelog</li>
                            <li className="cursor-pointer">Blog</li>
                            <li className="cursor-pointer">Download</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                        <div>
                            <button
                                className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2] px-5 py-2 text-white font-semibold rounded-md w-full md:w-auto"
                                type="button"
                            >
                                <span className="mr-2">+</span>
                                <span>New Ticket</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Navbar;