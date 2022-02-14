import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { BudgetExpense } from './BudgetExpense';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

import { GlobalProvider } from '../context/GlobalState';
import './Home.scss';

function Home() {
  return (

    <GlobalProvider>
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

export default Home;
