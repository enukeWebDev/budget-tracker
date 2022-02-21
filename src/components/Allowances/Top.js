import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Moment from 'react-moment';
import Button from '@mui/material/Button';
import './Top.css';
//Instead of passing props - just in transaction and destructure for simplicity
const Top = () => {

  const { transactions,deleteTransaction } = useContext(GlobalContext);
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  return (  
      <div className="top--bar" >
        <div >
        <Moment className="chart__bottom" date={firstDay} format='LL' /> -  <Moment className="chart__bottom" date={lastDay} format='LL' />
        </div>
        <Button variant="contained" className="btn--add--allowances" style={{ backgroundColor: '#1aa333' }}>Add Allowances</Button>
      </div>
      
  )
}

export default Top;