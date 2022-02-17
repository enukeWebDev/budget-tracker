import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css'

export const AddTransaction = () => {

  const[type, setType] = useState("expense");
  const [category,setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [error,setError] = useState("");
  const [disable,setDisable] = useState(false);
  const [catOptions,setCatOptions]= useState([]);
  const { addTransaction,transactions,budgets,addBudget} = useContext(GlobalContext);

   const user_id = 1;
   useEffect(()=>{
    axios.get(`/api/categories/${user_id}`)
    .then((res)=>{
      console.log(res.data);
        setCatOptions(res.data);   
    })
    .catch((err) => { console.log(err)});
   },[]);

    useEffect(() => {
     
      axios.get(`/api/transactions/${user_id}`)
      .then((res) => {
        let data = res.data;
        console.log(res.data);
      // amount was in string refactor to change it into float
       let newData = data.map((item)=> ({
         id:item.id,
         category:item.category,
         amount:parseFloat(item.amount),
         date:item.date
       }))
      newData.forEach(element => {
        addTransaction(element);
       });
        
      })
      .catch((err)=>{ console.log(err)});
    },[])

   
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

  const selectCatOptions = catOptions.map((item)=>
     <option key={item.id}value={item.name}>{item.name}</option>
  )
  

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
            {selectCatOptions}
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