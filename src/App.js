import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { BudgetExpense } from './components/BudgetExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Navbar from './components/Navbar'

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Header />
      <div className="container">
        <Balance />
        <BudgetExpense />
        <TransactionList />
        <AddTransaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
