import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

export const AddTransaction = () => {

  const[type, setType] = useState("Expense");
  const [category,setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [error,setError] = useState("");
  const [disable,setDisable] = useState(false);
  // const [catOptions,setCatOptions]= useState([]);
  // const [warning, setWarning] = useState("");
  const { addTransaction,transactions,budgets,addBudget,categoryBudgets,addCategoryBudget} = useContext(GlobalContext);

  
    const onSubmit = e => {
    e.preventDefault();
    if(type === "Expense" || type === "categoryBudget"){
      if(category=== ""){
        setError("Please select category")
        return
      }
    }
    if(amount === 0){
      setError("Please Enter Amount");
      return
    }
    // check error for Expenses
    if(type === "Expense"){
      const newTransaction = {
      category,
      amount: parseFloat(amount),
      date: new Date()
      }
      addTransaction(newTransaction);

      axios.post(`/api/transactions/1`,newTransaction)
      .then ((res) => {
       console.log("OK");
      })
      .catch((err) => console.log(err)); 
      setAmount(0);
      setError("");
    }

  // checks errors for total budgets
    if(type === "Budget"){
      
      const newBudget = {
        id:budgets[0].id,
        amount: budgets[0].amount + parseFloat(amount),
        date:budgets[0].date
      }
      axios.post(`/api/budget/1`,newBudget)
      .then ((res) => {
       console.log("OK");
      })
      .catch((err) => console.log(err));
      addBudget(newBudget);
      setAmount(0);
      setError("");
    }

    if(type === "categoryBudget") {
      const budget = categoryBudgets.filter((item) => item.category === category);
      console.log(budget);
      const newTransaction = {
        category,
        budget: budget[0].budget + parseFloat(amount),
        date: new Date()
        }
        addCategoryBudget(newTransaction);
      
        axios.post(`/api/categories/allowances/1`,newTransaction)
        .then ((res) => {
         console.log("OK");
        })
        .catch((err) => console.log(err)); 
        setAmount(0);
        setError("");
     }
  }
  
  const handleType= (e)=>{ 
    const value= e.target.value;
    setType(value);
    setDisable(value === "Budget"? true:false);
   
  }

  const handleCategory = (e)=>{ 
    const value= e.target.value;
    setCategory(value); 
  }

  const selectCatOptions = categoryBudgets.map((item)=>
     <option key={item.id}value={item.category}>{item.category}</option>
  )
  

  return (
    <>
      <h3 className="add-head">Add New Transaction</h3>
      <form onSubmit={onSubmit}>

        <div className="form-control" onChange={handleType}>
          <select >
            <option value="Expense">Expense</option>  
            <option value="Budget">Total Budget</option>
           {/* { budgets[0].amount >0 &&<option value="categoryBudget">Assign Budget to Categories </option>} */}
          </select>
        </div>

        <div className="form-control" >
          <select onChange={handleCategory} name="category" disabled={disable}>
            <option value="types">Please choose category...</option>
            {selectCatOptions}
          </select>
        </div>



        <div className="form-controls">
          <p className="form__label">
          <label htmlFor="amount">Please Enter Amount<br /> </label>
          </p>
            {/* {type === "Budget" && <label htmlFor="amount">Please Enter Amount<br /> </label>} */}
            {/* {type === "categoryBudget" && <label htmlFor="amount">Please Select Amount <br /> </label>}
          </p>
         
          {type === "categoryBudget" && <p className="slider--margin">
          <Slider
            aria-label="Always visible"
            defaultValue={0}
            value={amount}
            min={0}
            max={budgets[0].amount-categoryBudgets.reduce(function (acc, obj) { return acc + obj.budget; }, 0)}
            valueLabelDisplay="on"
            valueLabelDisplay="auto"
            onChange={(e)=> setAmount(e.target.value)}
           
          /></p>}
          {type === "categoryBudget" && <input type='number' step="0.1" className="form__input" value={amount} disabled={true} placeholder="Enter amount..." />} */}
          {/* {type === "Expense"  &&<input type='number' step="0.1" className="form__input" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />}
          {type === "Budget"  &&<input type='number' step="0.1" className="form__input" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />} */}
          <input type='number' step="0.1" className="form__input" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          {error && <p className="form__label color--red">{error}</p>}
          <br />
        </div>

        {type === "Expense" &&<button className="btn" >Add {type}</button>}
        {type === "Budget" &&<button className="btn" >Add To Budget</button>}
        {type === "categoryBudget" &&<button className="btn" >Assign Budget to {category || "..."}</button>}

      </form>
    </>
  )
}