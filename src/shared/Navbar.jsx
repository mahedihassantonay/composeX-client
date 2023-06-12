import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {user, logOut} = useAuth()
    const menuList = <>
    
    <li><Link>Home</Link></li>
    <li><Link>Instructors</Link></li>
    <li><Link to='/classes'>Classes</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    
    
    </>

const handleSignOut = () => {
  logOut()
    .then()
    .catch((error) => {
      console.log(error);
    });
};



    return (
        <>

<div className="navbar bg-black z-10  sticky">
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
  <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-9 rounded-full">
                    {user?.photoURL ? (
                      <img src={user.photoURL} title={user.displayName} />
                    ) : (
                      <img
                        src="https://randomuser.me/api/portraits/men/43.jpg"
                        title={user?.displayName}
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={handleSignOut}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="bg-red-400 p-2 rounded font-semibold text-white hover:bg-transparent">
                <Link to="/login">Login</Link>
              </div>
            )}
          </div>
  </div>
</div>
            
        </>
    );
};

export default Navbar;