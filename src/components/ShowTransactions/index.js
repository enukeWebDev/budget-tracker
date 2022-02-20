import React, { useContext, useState} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './index.css';
import Header from './Header.js';
export const ShowTransactions = (props) => {
  const {selectedCategory}= props;
  const { transactions,deleteTransaction } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);

    const filteredTransactions = transactions.filter(item => 
     item.category === selectedCategory      
    )

    // setTotal(filteredTransactions.length >0?
    //  filteredTransactions.reduce((acc, obj) =>{ return acc + obj.amount }, 0):0);
    
    
    
  return (
    <div className="Show__details">
      <Header selectedCategory={selectedCategory} transactions={filteredTransactions} />
    </div>
  )
}