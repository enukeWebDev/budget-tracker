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
import React, { useState, useEffect } from 'react';
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [form, openForm] = useState(false);
  useEffect(() => {
    const resizeListener = () => {
      setScreenWidth(window.innerWidth)
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])
  

  return (
    < GlobalProvider >
      <Welcome screenWidth={screenWidth} form={form} openForm={openForm}/>
      <main className="layout">
      <DarkLightMode theme={theme} setTheme={setTheme} />
        {/* <ThemeProvider theme={themes[theme]}> */}
        <ThemeProvider theme={themes[theme]}>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home  screenWidth={screenWidth} form={form}/>} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/allowances" element={<Allowances/>} />
          </Routes>

        </ThemeProvider>

      </main>


    </GlobalProvider >


  );
}

export default App;