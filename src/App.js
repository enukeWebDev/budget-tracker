import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { BudgetExpense } from './components/BudgetExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Navbar from './components/navbar/Navbar'

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>

      <div className="whole-app">
        <Navbar />
        <div className="centre-content">
          <Header />
          <Balance />
          <BudgetExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>

    </GlobalProvider>
  );
}

export default App;
