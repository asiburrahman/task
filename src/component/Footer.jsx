import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="  bg-[#0C3B32] w-[1440px] h-[378px] bg-[url('/images/footer-bg.png')] bg-cover bg-center">
            <div className="w-[1200px] h-[350px] mx-auto  flex flex-col  pt-[101px] relative">

                {/* Logo */}
                <div className="flex flex-row w-[1200px] items-center    justify-between">
                    <div className="w-[207px] h-[76px]">
                        <img src="/images/footer-logo.png" alt="" />
                    </div>
                    <div className='w-[404px] h-[72px] '>
                        <p className="text-white text-sm   ">
                            Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.
                        </p>
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex space-x-4">
                        <button className="flex items-center  px-4 py-2 rounded-md text-white bg-transparent hover:bg-green-700 transition">
                            <img src="/images/app.png" alt="" />
                        </button>
                        <button className="flex items-center px-4 py-2 rounded-md text-white bg-transparent hover:bg-green-700 transition">
                            <img src="/images/google.png" alt="" />
                        </button>


                    </div>



                </div>


                {/* Social Media Icons */}
                <div className="flex space-x-6 text-white text-2xl mt-24 ">
                    <FaYoutube className="cursor-pointer hover:text-red-500" />
                    <FaXTwitter className="cursor-pointer hover:text-blue-400" />
                    <FaFacebook className="cursor-pointer hover:text-blue-600" />
                    <FaInstagram className="cursor-pointer hover:text-pink-500" />
                </div>


                {/* Footer Bottom */}
                

            </div>
            <div className='border-t-2 border-green-200 opacity-40 '>
                    <div className=" text-green-200 text-xs mt-1 w-[1200px] mx-auto">
                        © 2021-2025. ScapeSync. All Rights Reserved.
                    </div>
                </div>

        </div>

    );
};

export default Footer;