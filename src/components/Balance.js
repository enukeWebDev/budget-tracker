import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import classNames from "classnames";
import './Balance.css'

export const Balance = () => {
  let balanceMoney = classNames('balance-dollars');

  const { transactions ,budgets } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const expense = amounts.reduce((acc, item) => (acc += item), 0) ;
  let total = (budgets[0].amount - expense).toFixed(2);
  
  if(total < 0) {
    balanceMoney = classNames ('balance-dollars','color--red')
  }
   
  return (
    <div className="counter-container">
      <img src='https://icon-library.com/images/expenses-icon/expenses-icon-20.jpg' width={100} height={100} className="icon"/ >

    <div className="balance">
      <h4 className="balance-name">Balance</h4>
      <p className={balanceMoney}>${total}</p>
    </div>
    </div>
  )
}
