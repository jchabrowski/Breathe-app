import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/images/menu.svg';
import test from '../../assets/images/test.svg';
import trening from '../../assets/images/trening.svg';
import info from '../../assets/images/info.svg';
import { motion } from 'framer-motion';

const navStyle = {
  position: 'fixed',
  width: '100%',
  maxWidth: '500px',
  bottom: '0px',
};

const linkStyle = {
  padding: '10px 0px',
};

const Navbar = () => {
  return (
    <motion.div>

    <nav className="navbar navbar-dark bg-dark justify-content-around mt-3" style={navStyle}>
      <Link className="nav-link" to="/" style={linkStyle}>
        <div>
          <img src={menu} alt="menu"></img>
        </div>
      </Link>
      
      <Link className="nav-link" to="/BreatheTest" style={linkStyle}>
        <div>
          <img src={test} alt="test"></img>
        </div>
      </Link>

      <Link className="nav-link" to="/Exercise" style={linkStyle}>
        <div>
          <img src={trening} alt="trening"></img>
        </div>
      </Link>

      <Link className="nav-link" to="/Info" style={linkStyle}>
        <div>
          <img src={info} alt="info"></img>
        </div>
      </Link>
    </nav>
    </motion.div>
  )
};

export default Navbar;