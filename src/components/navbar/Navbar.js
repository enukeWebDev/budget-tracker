import './Navbar.css';
import React from 'react'
import { NavLink } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import HistoryIcon from '@mui/icons-material/History';
import { grey } from '@mui/material/colors'


function Navbar() {
  return (
    <main>

      <section className="navbar">
          <div className='home'>
            <NavLink to="/home"> <HomeIcon fontSize="large" sx={{ color: grey[50] }}/> </NavLink> 
          </div>
          <div className='allowances'>
            <NavLink to="/allowances"> <PointOfSaleIcon fontSize='large' sx={{ color: grey[50] }}/> </NavLink>
          </div>
          <div className='expenses'>
            <NavLink to="/transactions"> <HistoryIcon fontSize='large'sx={{ color: grey[50] }}/> </NavLink>
          </div>
      </section>

  </main>
  );
}

export default Navbar;
