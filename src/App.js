import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Transaction from "./components/TransactionHistory";
import { Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar'

import './App.css';

function App() {
  return (
    <main className="layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transaction />} />
      </Routes>
  </main>

  );
}

export default App;