import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import logo from '../assets/images/logo.png'


const Navbar = () => {

     const {user,logOut} = useContext(AuthContext)

    

    

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }

 
    const navlinks = <>
        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      }  to='/'>
              Home
          </NavLink></li>
        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      }  to='/available-food'>
             Available Foods
          </NavLink></li>
        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      }  to='/addfood'>
              Add Food
          </NavLink></li>
        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      }  to='/managefood'>
             Manage My Food
          </NavLink></li>
        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      }  to='/foodrequest'>
              My Food Request
          </NavLink></li>
        <li><NavLink className={({isActive}) =>
      isActive ? 'btn btn-outline btn-success font-bold' : 'font-bold'
      }  to='/eventcalendar'>
              Add Event
          </NavLink></li>

        
        
        
    </>
    return (
        <div className=" ">
           <div className="navbar bg-base-100 shadow-lg z-10 px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link className=" flex gap-2 " to={'/'}>
      <img className="w-[50px]" src={logo} alt="" />
      <a className="btn btn-outline btn-warning text-xl">Feed Your Community</a>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
    <div className="navbar-end flex gap-2 ">
    
    

{
      user ?
      <div className="flex gap-2">
        
        <Link >
           <img className="w-[50px] rounded-full" 
             title={user?.displayName} src={user?.photoURL} alt="" /> 
        </Link>
        
        
        <button onClick={handleSignOut} className="btn btn-outline btn-secondary"> Sign Out </button>
      </div>
      :
      <div className="flex gap-4">
          <Link to='/login'>
            <button className="btn btn-outline btn-success"> Login</button>
          </Link>
          <Link to='/signup'>
            <button className="btn btn-outline btn-success">Sign Up</button>
          </Link>
      </div>
    }

  


  </div>  

</div>
        </div>
    );
};

export default Navbar;