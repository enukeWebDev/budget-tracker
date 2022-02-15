import React from 'react';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
function Header(props) {
  
  return (
    <div className="transaction__history__header">
     <div className="money__icon">
       <MoneyOffIcon className="color--red"/>
       <div className="transaction__heading">
        <h2>
          {props.category}
        </h2>
        <p>
          {props.content.length} transactions
        </p>
       </div>
     </div>
     <h2 class="color--red">${props.expense}</h2>
     
    </div>
  );
}

export default Header;