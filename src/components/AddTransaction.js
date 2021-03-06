import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css';
import DatePicker from 'react-date-picker';
import { v4 as uuid } from 'uuid';

export const AddTransaction = () => {


  const [value, setValue] = useState(new Date());
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);
  const { addTransaction, transactions, budgets, addBudget, categoryBudgets, addCategoryBudget } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    if (type === "Expense" || type === "categoryBudget") {
      if (category === "") {
        setError("Please select category")
        return
      }
    }
    if (amount === 0) {
      setError("Please Enter Amount");
      return
    }
    // check error for Expenses
    if (type === "Expense") {
      const unique_id = uuid();
      const small_id = unique_id.slice(0, 8)
      const newTransaction = {
        id: small_id,
        category,
        amount: parseFloat(amount),
        date: value
      }
      addTransaction(newTransaction);

      axios.post(`/api/transactions/1`, newTransaction)
        .then((res) => {
          console.log("OK");
        })
        .catch((err) => console.log(err));
      setAmount(0);
      setError("");
    }

    // checks errors for total budgets
    if (type === "Budget") {
      console.log(value);
      const newBudget = {
        id: budgets[0].id,
        amount: budgets[0].amount + parseFloat(amount),
        date: budgets[0].date
      }
      axios.post(`/api/budget/1`, newBudget)
        .then((res) => {
          console.log("OK");
        })
        .catch((err) => console.log(err));
      addBudget(newBudget);
      setAmount(0);
      setError("");
    }

    if (type === "categoryBudget") {
      const budget = categoryBudgets.filter((item) => item.category === category);
      console.log(budget);
      const newTransaction = {
        category,
        budget: budget[0].budget + parseFloat(amount),
        date: value
      }
      addCategoryBudget(newTransaction);

      axios.post(`/api/categories/allowances/1`, newTransaction)
        .then((res) => {
          console.log("OK");
        })
        .catch((err) => console.log(err));
      setAmount(0);
      setError("");
    }
  }

  const handleType = (e) => {
    const value = e.target.value;
    setType(value);
    setDisable(value === "Budget" ? true : false);

  }

  const handleCategory = (e) => {
    const value = e.target.value;
    setCategory(value);
  }

  const selectCatOptions = categoryBudgets.map((item) =>
    <option key={item.id} value={item.category}>{item.category}</option>
  )


  return (
    <>
      <h3 className="add-head">Add New Transaction</h3>
      <form onSubmit={onSubmit}>

        <div className="form-control" onChange={handleType}>
          <select >
            <option value="Expense">Expense</option>
            <option value="Budget">Total Budget</option>
          </select>
        </div>

        <div className="form-control" >
          <select onChange={handleCategory} name="category" disabled={disable} className="select__cat--display">
            <option value="types">Please choose category...</option>
            {selectCatOptions}
          </select>

        </div>



        <div className="form-controls">
          <p className="form__label">
            <label htmlFor="amount">Please Enter Amount<br /> </label>
          </p>
          <input type='number' step="0.1" className="form__input" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          {error && <p className="form__label color--red">{error}</p>}
          <br />
          <DatePicker dateFormat="DD/MM/YYYY HH:mm:ss" onChange={(newValue) => { setValue(newValue) }} value={value} className="form__input form__date" />
        </div>

        {type === "Expense" && <button className="btn" >Add {type}</button>}
        {type === "Budget" && <button className="btn" >Add To Budget</button>}
        {type === "categoryBudget" && <button className="btn" >Assign Budget to {category || "..."}</button>}

      </form>
    </>
  )
}