import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Transaction from "./components/TransactionHistory";
import { Routes, Route} from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'

import './App.css';

function App() {
  const [transactionHistory, setTransactionHistory] = useState([])


  return (
   <GlobalProvider>
    <main className="layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home setTransactionHistory={setTransactionHistory} />} />
        <Route path="/transactions" element={<Transaction transactionHistory={transactionHistory} />} />
      </Routes>
  </main>
  </GlobalProvider>
  );
}

export default App;