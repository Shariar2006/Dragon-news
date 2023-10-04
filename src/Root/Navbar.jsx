import { Link, NavLink } from "react-router-dom";
import defaultUser from '../assets/user.png'
import { useContext } from "react";
import { Context } from "../AuthContext/AuthContext";

const navlink =
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>
const Navbar = () => {
    const {user, logout} = useContext(Context)
    const handlesingout = () => {
        logout()
        .then()
        .catch()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={defaultUser} />
                    </div>
                </label>
            {
                user ? 
                <button onClick={handlesingout} className="bg-[#403F3F] text-white px-6 py-2">Sing out</button> 
                : 

                <Link to='/login' className="bg-[#403F3F] text-white px-6 py-2">Login</Link>
            }
            </div>
        </div>
    );
};

export default Navbar;