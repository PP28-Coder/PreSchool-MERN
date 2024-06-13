import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.css';

function Nav() {
  return (
    <nav>
       <a href="/">Home</a>
	    <a href="/About" >About </a>
	    <a href="/Gally" >Gallery</a> 
	    <a href="/Staff">Our Team</a>
	    <a href="/Contact">Contact</a>
	    <div class="animation "></div>
    </nav>
  );
}

export default Nav;
