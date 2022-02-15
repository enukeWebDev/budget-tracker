import './Navbar.css';
import React from 'react'
import NavLink from 'react-router-dom'


function Navbar() {
  return (
    <main className="main-layout">

      <section className="navbar">
        <h1> nav </h1>
        <NavLink to="/home"> Home </NavLink> 
        <h2 to="/allowances"> Allowances </h2>
        <h2 to="/expenses"> Expense History </h2>
      </section>


  </main>
  );
}

export default Navbar;
