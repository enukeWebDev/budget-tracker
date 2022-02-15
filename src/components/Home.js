import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { BudgetExpense } from './BudgetExpense';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import Welcome from './Welcome'
import Navbar from './navbar/Navbar'
import './PieChart.scss'
import { GlobalProvider } from '../context/GlobalState';
import PieChart from './PieChart';
import './Home.css';
const transactions = [
    {
      id: 1,
      text: "Budget",
      amount: 100
    },

    {
      id: 2,
      text: "Phone",
      amount: 20
    },

    {
      id: 3,
      text: "Food",
      amount: 10
    },

    {
      id: 4,
      text: "Gas",
      amount: 20
    },
  ];

function App() {
   
  return (
    <GlobalProvider>

      <div className="whole-app">
        <Navbar />
        <div className="centre-content">
          <Welcome />
          <div className="shape">
            <Header />
            <Balance />
            <BudgetExpense />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
        <div className="right-content">
          <PieChart />
        </div>
      </div>

    </GlobalProvider>
  );
}

export default App;
