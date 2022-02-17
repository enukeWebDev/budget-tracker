import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },

  {
    title: "Adjust Budgets",
    path: "/allowances",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },

  {
    title: "Transaction History",
    path: "/transactions",
    icon: <FaIcons.FaEnvelopeOpen />,
    cName: "nav-text"
  },

  {
    title: "Login",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },



]
