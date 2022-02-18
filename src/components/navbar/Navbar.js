import React, { useState, useEffect } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';


function Sidebar() {

  const [sidebar, setSidebar] = useState(false);
  const [colour, setColour] = useState(false)
  const [dispalySidebar, setShowSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar);


  useEffect(() => {
    const location = window.location.pathname
    if (location === '/') {
      setShowSidebar(false)
    }
  }, [window.location.pathname])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="sidebar">
          <Link style={{display: dispalySidebar ? undefined : 'none'}} to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link className={item.path === window.location.pathname ? 'active' : null} to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar;