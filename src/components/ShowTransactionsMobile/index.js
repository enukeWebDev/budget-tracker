import React, { useContext, useState} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './index.css';
import Header from './Header.js';
import Content from './Content.js';

export const ShowTransactionsMobile = (props) => {
  const {selectedCategory}= props;
  const { transactions,deleteTransaction } = useContext(GlobalContext);
 

    const filteredTransactions = transactions.filter(item => 
     item.category === selectedCategory      
    )

    const content = filteredTransactions.map((item) =>{
      return <Content key={item.id} date={item.date} amount={item.amount} id={item.id} delete={deleteTransaction} />
    })

   const arr = filteredTransactions.sort(function(x, y){
      return y.date-x.date;
  })
  console.log(arr);
    
  return (
    <div className="Show__details--mobile">
      <Header selectedCategory={selectedCategory} transactions={filteredTransactions} />
      {content.reverse()}
    </div>
  )
}