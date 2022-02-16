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

  const [text, setText] = useState("");

  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3 className="add-head">Add New Transaction</h3>
      <form onSubmit={onSubmit}>

        {/* <div className="form-control">
          <label htmlFor="text">Choose One...</label>
          <input type="text" value={text} 
          onChange={(e) => setText(e.target.value)} placeholder="Enter type of expenses..." /> */}


        {/* This can be map instead later on to clean this up a bit */}
        <div className="form-control">
          <select>
            <option value="budget">Budget</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="form-control">
          <select>
            <option value="types">Please choose one...</option>
            <option value="set-budget">Set you monthly budget</option>
            <option value="bills">Bills</option>
            <option value="food">Food</option>
            <option value="gas">Gas</option>
            <option value="entertainment">Entertainment</option>
            <option value="fitness">Fitness</option>
            <option value="others">Others</option>
          </select>
        </div>



        <div className="form-controls">
          <p clasName="form__label"><label htmlFor="amount">Please Enter Amount<br />
            (negative - expense, positive - budget)</label>
            </p>
          <input type="number" className="form__input" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>

        <button className="btn">Add Transaction</button>

      </form>
    </>
  )
}