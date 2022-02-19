import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Transaction from "./components/TransactionHistory";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import Navbar from './components/navbar/Navbar'

//Add these
import DarkLightMode from "./components/DarkLightMode";
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

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
      <main className="layout">

        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transaction />} />
        </Routes>

        <ThemeProvider theme={themes[theme]}>
          <DarkLightMode theme={theme} setTheme={setTheme} />
        </ThemeProvider>
      </main>


    </GlobalProvider >
  );
}

export default App;