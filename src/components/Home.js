import {React, useEffect, useContext,useState} from 'react';
import axios from 'axios';
import { Header } from './Header';
import { Balance } from './Balance';
import { BudgetExpense } from './BudgetExpense';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import Welcome from './Welcome'
import './PieChart.scss'
import PieChart from './PieChart';
import './Home.css';
import { GlobalContext } from '../context/GlobalState';


function Home() {
  const { loadTransactions} = useContext(GlobalContext);
  const [mode, setMode]= useState(false);

  useEffect(() => {
     
    axios.get(`/api/transactions/1`)
    .then((res) => {
      let data = res.data;
    // amount was in string refactor to change it into float
     let newData = data.map((item)=> ({
       id:item.id,
       category:item.category,
       amount:parseFloat(item.amount),
       date:item.date
     }))
      loadTransactions(newData)
      setMode(true);  
    })
    .catch((err)=>{ console.log(err)});
  },[])
    
  return (
      <div className="whole-app">
        {mode &&
        <div className="centre-content">
          <Welcome />
          <div className="shape">
            <div className="left--content"> 
              <Balance />
              <TransactionList />
              <AddTransaction />
           </div>
           <div className="right-content">
              <BudgetExpense />
              <PieChart />
           </div>
          </div>
        </div>
       }
      </div>
  );
}

export default Home;
