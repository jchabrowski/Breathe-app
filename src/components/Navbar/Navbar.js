import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/images/menu.svg';
import test from '../../assets/images/test.svg';
import trening from '../../assets/images/trening.svg';
import info from '../../assets/images/info.svg';

const navStyle = {
  position: 'absolute',
  bottom: '0px',
  width: '100%',
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-around" style={navStyle}>
      <Link className="nav-link" to="/">
        <div>
          <img src={menu} alt="menu"></img>
        </div>
      </Link>
      
      <Link className="nav-link" to="/LengthTest">
        <div>
          <img src={test} alt="test"></img>
        </div>
      </Link>

      <Link className="nav-link" to="/Exercise">
        <div>
          <img src={trening} alt="trening"></img>
        </div>
      </Link>

      <Link className="nav-link" to="/Info">
        <div>
          <img src={info} alt="info"></img>
        </div>
      </Link>
    </nav>
  )
};

export default Navbar;