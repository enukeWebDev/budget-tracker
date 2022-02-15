import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Routes, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <main className="layout">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  </main>

  );
}

export default App;