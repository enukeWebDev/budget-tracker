import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './BudgetExpense.css'

export const BudgetExpense = () => {

  const { transactions , budgets} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const expense = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="counter-container">

      <div className="budget">
        <h4>Budget</h4>
        <p className="money-plus">${budgets[0].amount.toFixed(2)}</p>
      </div>

      <div className="expense">
        <h4>Expense</h4>
        <p className="money-minus">${expense}</p>
      </div>

    </div>
  )
}
