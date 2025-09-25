import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-[1440px] h-[100px] flex justify-between items-center px-[120px]  shadow-md bg-white">
            <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="Logo" className="w-[147px] h-[60px]" />
                <span className="font-bold text-lg">ScapeSync</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Get Started
            </button>
        </nav>
    );
};

export default Navbar;