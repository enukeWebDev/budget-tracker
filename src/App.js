// import {useState} from 'react';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Transaction from "./components/TransactionHistoryold";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import Welcome from './components/Welcome'

//Add these
import DarkLightMode from "./components/DarkLightMode";
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';



import Allowances from "./components/Allowances";
import './App.css';

//Start
const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}



//End


function App() {

  const [theme, setTheme] = useState("light");

  return (
    < GlobalProvider >
      <Welcome />
      <main className="layout">
      <DarkLightMode theme={theme} setTheme={setTheme} />
        {/* <ThemeProvider theme={themes[theme]}> */}
        <ThemeProvider theme={themes[theme]}>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/allowances" element={<Allowances/>} />
          </Routes>


          

          {/* <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/transactions" element={<Transaction />} />
            </Routes>
          </DarkLightMode> */}
        </ThemeProvider>

      </main>


    </GlobalProvider >


  );
}

export default App;