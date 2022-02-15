import './Navbar.css';
import React from 'react'
import { NavLink } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';


function Navbar() {
  return (
    <main className="main-layout">

      <section className="navbar">
        <h1> nav </h1>
        <NavLink to="/home"> <HomeIcon fontSize="large" /> </NavLink> 
        <NavLink to="/allowances"> <HomeIcon /> </NavLink>
        <h2 to="/expenses"> Expense History </h2>
      </section>

  </main>
  );
}

export default Navbar;
