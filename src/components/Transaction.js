import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Transaction.css'


//Instead of passing props - just in transaction and destructure for simplicity
export const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  //   return (
  //     <li className={transaction.amount < 0 ? "minus" : "plus"}>
  //       {transaction.category} <span>{sign}${Math.abs(transaction.amount)}</span><button
  //         onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
  //     </li>
  //   )
  // }

  return (
    <li className={transaction.category}>
      <span>${Math.abs(transaction.amount)} - {transaction.category}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}