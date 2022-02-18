import './style.scss';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import useContext from 'react'
import { GlobalContext } from '../../context/GlobalState';


function Transaction({transactionHistory}) {
  const { transactions } = useContext(GlobalContext);
  const [localStorageTransactions, setLocalStorageTransactions] = useState()

  console.log(transactions)

  console.log(transactionHistory)
  useEffect(() => {
    const localTransactions = JSON.parse(localStorage.getItem('transactionHistory'))
    setLocalStorageTransactions(localTransactions)
  }, [])


  return (
    <div className='history'> 
    <main className="transaction--layout" > 

       <ul className="list">
        {localStorageTransactions ? localStorageTransactions.map(transaction => (<Content key={transaction.id} transaction={transaction} />)) : null}
      </ul>
      
    </main>
    </div>
  );
}

export default Transaction;
