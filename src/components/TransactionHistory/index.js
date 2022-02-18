import './style.scss';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';


function Transaction() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions)


  return (
    <div className='history'> 
    <main className="transaction--layout" > 

       <ul className="list">
        { transactions.map(transaction => (<Content key={transaction.id} transaction={transaction} />)) }
      </ul>
      
    </main>
    </div>
  );
}

export default Transaction;
