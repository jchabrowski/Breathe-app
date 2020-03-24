import React from 'react';
import logo from '../../views/logo-mini.svg';
import menu from '../../views/hamburger.svg';
import { Link  } from 'react-router-dom';
const Navbar = () => {
  return (
   
    <nav className="navbar nav-tabs navbar-light bg-light justify-content-around">
      <Link className="nav-link" to="/">
        <div>
          <img src={logo} alt="logo"></img>
        </div>
      </Link>
      
      <Link className="nav-link" to="/Exercise">
        <div>
          <img src={menu} alt="menu"></img>
        </div>
      </Link>
    </nav>
  
  )
};

export default Navbar;