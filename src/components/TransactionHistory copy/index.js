import './style.scss';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import {useState, useContext} from "react";
import {Grid} from "@material-ui/core";
import { GlobalContext } from '../../context/GlobalState';

function Transaction() {
  const{transactions}= useContext(GlobalContext);
  console.log(transactions);
  // const contentDisplay = transactions.map((item)=> {
  //  return <Content key={item.id} date={item.date} amount={item.amount} />
  // })


  return (
    <div className='history'> 
    <main className="transaction--layout" > 
       {/* <Header category="Food" expense="100" content={content}/>
       {contentDisplay}

       <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))} */}
      {/* </ul> */}
      
    </main>
    </div>
  );
}

export default Transaction;
