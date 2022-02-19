import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './index.css';
import Header from './Header.js';
export const ShowTransactions = (props) => {
  const {selectedCategory}= props;
  const { transactions,deleteTransaction } = useContext(GlobalContext);

  // const refactor = transactions.map((item) =>)

  return (
    <div className="Show__details">
      <Header selectedCategory={selectedCategory} />
    </div>
  )
}