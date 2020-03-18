import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink  } from 'react-router-dom';
const Navbar = () => {
  return (
   <div>
    <nav className="navbar nav-tabs navbar-light bg-light justify-content-center">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/Exercise">Ćwiczenia</Link>
      <Link className="nav-link" to="/LengthTest">Test</Link>
    </nav>
  </div>
  )
};

export default Navbar;