import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './BudgetExpense.css'

export const BudgetExpense = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  //income
  const budget = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  //expense
  const expense = (
    amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

  return (
    <div className="counter-container">

      <div className="budget">
        <h4>Budget</h4>
        <p className="money-plus">${budget}</p>
      </div>

      <div className="expense">
        <h4>Expense</h4>
        <p className="money-minus">${expense}</p>
      </div>

    </div>
  )
}
