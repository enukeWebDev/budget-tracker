import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Balance.css'

export const Balance = () => {

  const { transactions ,budgets } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  
  const expense = 
    amounts
      .reduce((acc, item) => (acc += item), 0) ;

   let total = (budgets[0].amount - expense).toFixed(2);
   
   
  return (
    <div className="counter-container">
      <img src='https://icon-library.com/images/expenses-icon/expenses-icon-20.jpg' width={100} height={100} className="icon"/ >
    <div className="balance">
      <h4 className="balance-name">Balance</h4>
      <p className="balance-dollars">${total}</p>
    </div>
    </div>
  )
}
