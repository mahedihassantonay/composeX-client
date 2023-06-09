import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
    const menuList = <>
    
    <li><Link>Home</Link></li>
    <li><Link>Instructors</Link></li>
    <li><Link>Classes</Link></li>
    <li><Link>Dashboard</Link></li>
    
    
    </>





    return (
        <>

<div className="navbar bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-300">
        {menuList}
      </ul>
    </div>
    <img src={logo}  className="btn btn-ghost normal-case text-xl h-16 font-bold" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-300  font-semibold">
     {menuList}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </>
    );
};

export default Navbar;