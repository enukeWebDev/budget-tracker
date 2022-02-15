import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Balance.css'

export const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  // console.log(amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (

    <>
      <h4 className="balance-name">Balance</h4>
      <h1 className="balance-dollars">${total}</h1>
    </>
  )
}
