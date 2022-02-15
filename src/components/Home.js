import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { BudgetExpense } from './BudgetExpense';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import Welcome from './Welcome'
import Navbar from './navbar/Navbar'

import { GlobalProvider } from '../context/GlobalState';

import './Home.css';

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
          
        </div>
      </div>

    </GlobalProvider>
  );
}

export default App;
