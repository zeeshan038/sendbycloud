import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { name: "My Account", path: "/my-account" },
        { name: "Terms of service", path: "/pricing" },
        { name: "About Us", path: "/branding" },
        { name: "Contact Us", path: "/contacts" }
    ];

    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent">

            {/* Logo */}
            <Link to={'/'} className="flex justify-center items-center p-2 bg-white rounded-lg shadow-md ml-2 cursor-pointer hover:scale-105 transition">
                <img src={logo} alt="Logo" className="w-32 h-auto object-contain" />
            </Link>

            {/* Nav */}
            <div className="hidden lg:flex items-center gap-3">

                <div className="flex items-center bg-white rounded-full p-1.5 shadow-sm border border-gray-100">

                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');

                        return (
                            <Link
                                key={index}
                                to={item.path}
                                className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap
                                ${isActive
                                        ? 'bg-[#293a93] text-white'
                                        : 'text-gray-700 hover:text-black'}
                                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Auth */}
                <div className="flex items-center bg-white rounded-[12px] shadow-sm border border-gray-100 p-1">
                    <Link to="/login" className="text-[#111] px-5 py-2 font-semibold text-[15px] hover:bg-gray-50 rounded-[8px]">
                        Sign in
                    </Link>
                    <Link to="/register" className="bg-[#2b3a8c] hover:bg-[#202b6a] text-white px-5 py-2 rounded-[8px] text-[15px] font-semibold">
                        Sign up
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;