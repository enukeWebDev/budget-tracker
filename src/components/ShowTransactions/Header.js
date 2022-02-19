import React from 'react';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import './Header.css';
function Header(props) {
  
  return (
    <div className="transaction__show__header">
     <div className="money__icon">
       <MoneyOffIcon  className="color--redish"/>
       <div className="transaction__show__heading">
        <h2>
          Grocery
        </h2>
        <p>
          4 transactions
        </p>
       </div>
     </div>
     <h2 className="total__expense">${900}</h2>
     
    </div>
  );
}

export default Header;