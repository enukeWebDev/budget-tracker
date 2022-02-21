import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './index.css';
import Topbar from './Top';
import Bottombar from './Bottom';
import Form from './Form';

//Instead of passing props - just in transaction and destructure for simplicity
const Allowances = () => {

  const { transactions,deleteTransaction } = useContext(GlobalContext);


  return (
    <div>
      <div className="allowances">
        <Topbar />
        <Bottombar />
      
      </div>
        <Form />
    </div>
  )
}

export default Allowances;