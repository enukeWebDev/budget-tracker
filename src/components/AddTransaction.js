// import React, { useState, useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
// import './AddTransaction.css'

// export const AddTransaction = () => {

//   const [text, setText] = useState("");

//   const [amount, setAmount] = useState(0);

//   const { addTransaction } = useContext(GlobalContext);

//   const onSubmit = e => {
//     e.preventDefault();

//     const newTransaction = {
//       id: Math.floor(Math.random() * 1000),
//       text,
//       amount: +amount
//     }

//     addTransaction(newTransaction);
//   }

//   return (
//     <>
//       <h3>Add New Transaction</h3>
//       <form onSubmit={onSubmit}>

//         {/* <div className="form-control">
//           <label htmlFor="text">Choose One...</label>
//           <input type="text" value={text} 
//           onChange={(e) => setText(e.target.value)} placeholder="Enter type of expenses..." /> */}


//         {/* This can be map instead later on to clean this up a bit */}
//         <div className="form-control">
//           <select>
//             <option value="budget">Budget</option>
//             <option value="expense">Expense</option>
//           </select>
//         </div>

//         <div className="form-control">
//           <select>
//             <option value="types">Please choose one...</option>
//             <option value="set-budget">Set you monthly budget</option>
//             <option value="bills">Bills</option>
//             <option value="food">Food</option>
//             <option value="gas">Gas</option>
//             <option value="entertainment">Entertainment</option>
//             <option value="fitness">Fitness</option>
//             <option value="others">Others</option>
//           </select>
//         </div>



//         <div className="form-controls">
//           <label htmlFor="amount">Please Enter Amount<br />
//             (negative - expense, positive - budget)</label>
//           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
//         </div>

//         <button className="btn">Add Transaction</button>

//       </form>
//     </>
//   )
// }


import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css'

export const AddTransaction = () => {

  const[type, setType] = useState("expense");
  const [category,setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [error,setError] = useState("");
  const [disable,setDisable] = useState(false);
  const { addTransaction,transactions,budgets,addBudget} = useContext(GlobalContext);

  const onSubmit = e => {
    
    e.preventDefault();
    if(type === "expense"){
      if(category=== ""){
        setError("Please select category")
        return
      }
    }
    if(amount === 0){
      setError("Please Enter Amount");
      return
    }
    if(type === "expense"){
      const newTransaction = {
      id: transactions.length +1,
      category,
      amount: parseFloat(amount)
      }
       
      addTransaction(newTransaction);
      setAmount(0);
      setError("");
    }

    if(type === "budget"){
      const newBudget = {
        id:1,
        amount: budgets[0].amount + parseFloat(amount)
      }
      addBudget(newBudget);
      setAmount(0);
      setError("");
    }
  }
  
  const handleType= (e)=>{ 
    const value= e.target.value;
    setType(value);
    setDisable(value === "budget"? true:false);
  }

  const handleCategory = (e)=>{ 
    const value= e.target.value;
    setCategory(value); 
  }

  return (
    <>
      <h3 className="add-head">Add New Transaction</h3>
      <form onSubmit={onSubmit}>

        <div className="form-control" onChange={handleType}>
          <select >
            <option value="expense">Expense</option>  
            <option value="budget">Budget</option>
          </select>
        </div>

        <div className="form-control" >
          <select onChange={handleCategory} name="category" disabled={disable}>
            <option value="types">Please choose category...</option>
            <option value="bills">Bills</option>
            <option value="food">Food</option>
            <option value="gas">Gas</option>
            <option value="entertainment">Entertainment</option>
            <option value="fitness">Fitness</option>
            <option value="others">Others</option>
          </select>
        </div>



        <div className="form-controls">
          <p className="form__label">
            <label htmlFor="amount">Please Enter Amount<br />
            </label>
          </p>
          <input type='number' step="0.1" className="form__input" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          {error && <p className="form__label color--red">{error}</p>}
          <br />
        </div>

        <button className="btn">Add Transaction</button>

      </form>
    </>
  )
}