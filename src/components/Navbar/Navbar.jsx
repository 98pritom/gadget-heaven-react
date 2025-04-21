import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className="flex space-x-4 justify-between">
                <div className="font-bold text-lg">Gadget Heaven</div>
                <div className='flex justify-between space-x-4'>
                    <NavLink to="/" className="">Home</NavLink>
                    <NavLink to="/statistics" className="">Statistics</NavLink>
                    <NavLink to="/dashboard" className="">Dashboard</NavLink>
                </div>
                <div className="flex space-x-2">
                    <button className="rounded-full bg-white p-2 text-purple-500 shadow">
                        ❤️
                    </button>
                    <button className="rounded-full bg-white p-2 text-purple-500 shadow">
                        🛒
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;