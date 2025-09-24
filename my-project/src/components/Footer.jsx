import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black mb-0'>
            <div className='grid grid-cols-5  container text-white py-11 grays'>
                <div>
                    <h3>CS — Ticket System</h3>
                    <p className='max-w-[250px] text-justify'>The CS Ticket Counter is your one-stop solution for booking tickets to university events, seminars, and cultural programs. It allows users to reserve tickets quickly, securely, and easily. With the ticket counter, you can enjoy hassle-free access to all events and never miss out on any university activity.</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>


                </div>
                <div>
                    <h3>Services</h3>
                    <p>Products & Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>

                </div>
                <div>
                    <h3>Information</h3>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>

                </div>
                <div className='flex flex-col'>
                    <h3>Social Links</h3>
                    <a href=""><i class="fa-brands fa-x-twitter"></i>@CS — Ticket System</a>
                    <a href=""><i class="fa-brands fa-linkedin"></i>@CS — Ticket System</a>
                    <a href=""><i class="fa-brands fa-facebook"></i>@CS — Ticket System</a>
                    <a href=""><i class="fa-solid fa-square-envelope"></i>support@cst.com</a>

                </div>


            </div>
            <div className=" mb-12 ">
                <hr className="border-0.5 border-gray-600 w-10/12 mx-auto" />
            </div>

            <h3 className='text-white text-center pb-6'>© 2025 CS — Ticket System. All rights reserved.</h3>



        </div>

    );
};

export default Footer;