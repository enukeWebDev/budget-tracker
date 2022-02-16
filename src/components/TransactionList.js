import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import './TransactionList.css'

export const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

  // console.log(context);

  return (
    <>
      {/* <h3 className="history">Recent Transactions</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul> */}
    </>
  )
}
