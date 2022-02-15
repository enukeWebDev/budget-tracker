import './Navbar.css';
import React from 'react'
import { NavLink } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import HistoryIcon from '@mui/icons-material/History';


function Navbar() {
  return (
    <main className="main-layout">

      <section className="navbar">
          <div className='home'>
            <NavLink to="/home"> <HomeIcon fontSize="large" /> </NavLink> 
          </div>
          <div className='allowances'>
            <NavLink to="/allowances"> <PointOfSaleIcon fontSize='large' /> </NavLink>
          </div>
          <div className='expenses'>
            <NavLink to="/expenses"> <HistoryIcon fontSize='large'/> </NavLink>
          </div>
      </section>

  </main>
  );
}

export default Navbar;
