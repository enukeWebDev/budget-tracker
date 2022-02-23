import {React, useState, useContext} from 'react';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import './Header.css';

function Header(props) {
  const{selectedCategory, transactions} = props;
  
  return (
    <div className="transaction__show__header-mobile">
     <div className="money__icon">
       <MoneyOffIcon  className="color--redish"/>
       </div>
       <div className="transaction__show__heading">
        <h2>
          {selectedCategory}
        </h2>
        {transactions.length >1 &&
        <p>
          {transactions.length} Transactions
        </p>}
        {transactions.length === 1 &&
        <p>
          {transactions.length} Transaction
        </p>}
       </div>
    
     <h2 className="total__expense">${transactions.reduce((acc, obj) =>{ return acc + obj.amount }, 0)}</h2>
     
    </div>
  );
}

export default Header;