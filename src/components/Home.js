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
  const { loadTransactions,loadBudget,addBudget} = useContext(GlobalContext);

   useEffect(() =>{
    let URL1 = `/api/transactions/1`;
    let URL2 = `/api/budget/1`;
    const promise1 = axios.get(URL1);
    const promise2 = axios.get(URL2);
    Promise.all([promise1, promise2])
    .then((res) =>{
      let transactions = res[0].data;
      if(res[0].data.length>0){
      let refatoredTransactions = transactions.map((item)=> ({
        id:item.id,
        category:item.category,
        amount:parseFloat(item.amount),
        date:item.date
      }))
       loadTransactions(refatoredTransactions);
    }
       if(res[1].data.length>0){
        const data = res[1].data;
        let newData = data.map((item)=> ({
          id:item.id,
          amount:parseFloat(item.amount),
          date:item.date
        }))
          loadBudget(newData)
          } 
        else {
          addBudget({
            id: 1,
            amount:0,
            date: new Date()
          })
        } 
    })
    .catch((err) => console.log(err));
   },[])
    
  return (
      <div className="whole-app">
        
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
       
      </div>
  );
}

export default Home;
