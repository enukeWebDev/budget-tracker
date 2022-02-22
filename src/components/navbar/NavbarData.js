import React from 'react';
import * as AiIcons from "react-icons/ai";

import { FaHistory } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { GiReceiveMoney } from 'react-icons/gi'

export const NavbarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },

  {
    title: "Adjust Allowances",
    path: "/allowances",
    icon: <GiReceiveMoney />,
    cName: "nav-text"
  },

  {
    title: "Transaction History",
    path: "/transactions",
    icon: <FaHistory/>,
    cName: "nav-text"
  },

  {
    title: "Logout",
    path: "/",
    icon: <AiOutlineLogout />,
    cName: "nav-text"
  },



]
