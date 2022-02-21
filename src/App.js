import {useState} from 'react';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Transaction from "./components/TransactionHistory";
import { Routes, Route} from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
// import Navbar from './components/navbar/Navbar'
import Welcome from './components/Welcome'
import Allowances from "./components/Allowances";
import './App.css';

function App() {

  return (
   <GlobalProvider>
    <main className="layout">
    <Welcome />
      {/* <Navbar /> */}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/allowances" element={<Allowances/>} />
      </Routes>
  </main>
  </GlobalProvider>
  );
}

export default App;