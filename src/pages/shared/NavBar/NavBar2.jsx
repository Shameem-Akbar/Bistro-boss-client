import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const navItems = (
        <>
            <NavLink>Home</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink>Dashboard</NavLink>
            <NavLink>Our Menu</NavLink>
            <NavLink>Our Shop</NavLink>
        </>
    );
    return (
        <div className="drawer max-w-screen-xl mx-auto py-2">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar justify-between bg-base-100">
                    <div className='md:navbar-start'>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className=" px-2 mx-2"><p className="uppercase">
                            <span className="text-xl md:text-2xl font-black">Bistro Boss</span>
                            <br />
                            <span className="text-sm font-bold">Restaurant</span>
                        </p></div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-10 font-semibold uppercase">
                            {/* <!-- Navbar menu content here --> */}
                            {navItems}
                        </ul>
                    </div>
                    <div className="md:navbar-end">
                        <Link className="btn btn-sm">Login</Link>
                    </div>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu px-6 py-4 space-y-2 w-48 bg-base-100 uppercase">
                    {/* <!-- Sidebar content here --> */}
                    {navItems}
                </ul>

            </div>
        </div>
    );
};

export default NavBar;