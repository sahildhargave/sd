
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
   <header className="header">
	<NavLink to="/" className="flex items-center justify-center w-10 h-10 font-bold bg-white rounded-lg shadow-md">
		<p className="blue-gradient_text"> Sahil</p>
	</NavLink>
   </header>
  )
}

export default Navbar
//import React from 'react';
//import PropTypes from 'prop-types';
//
//const Navbar = ({ toggleDarkMode, isDarkMode }) => {
//  return (
//    <nav>
//      {/* Your navigation items */}
//      <button onClick={toggleDarkMode}>
//        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//      </button>
//    </nav>
//  );
//};
//
//export default Navbar;