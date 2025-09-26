import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
axios.defaults.withCredentials = true;

const Navbar = () => {
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        // check session
        axios.get("https://backend-ecru-pi-97.vercel.app/me", { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(() => setUser(null));
    }, []);

    const handleLogout = () => {
        axios.post("https://backend-ecru-pi-97.vercel.app/logout")
            .then(() => setUser(null));
    };
    return (
        <nav className="w-[1440px] h-[100px] flex justify-between items-center px-[120px]  shadow-md bg-white">
            <div className="flex items-center gap-2">
                <Link to='/'><img src="./images/logo.png" alt="Logo" className="w-[147px] h-[60px]" /></Link>
            </div>

            <div>
                {user ? (
                    <>
                        <span className="mr-4 text-black">Welcome, {user.email}</span>
                        <button onClick={handleLogout} className="bg-green-500 text-white px-3 py-1 rounded">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to='/login' className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                        Get Started
                    </Link>
                )}
            </div>

        </nav>
    );
};

export default Navbar;