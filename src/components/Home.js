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

function App() {

  return (
    <GlobalProvider>

      <div className="whole-app">

        <div className="centre-content">
          <Welcome />

          <div className="shape">

            <div className="left--content">
              <Balance />
              {/* <TransactionList /> */}
              <AddTransaction />
            </div>

            <div className="right-content">

              <BudgetExpense />
              <PieChart />
            </div>


          </div>
          <div className="right-content1">
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
