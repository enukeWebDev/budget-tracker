import {useState, useContext, useEffect} from 'react';
import './form.css';
import { GlobalContext } from '../../context/GlobalState';
import axios from 'axios';
const Form = (props) =>{
  const {showForm, setFormDisplay} = props;
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const { categoryBudgets,budget,addCategoryBudget} = useContext(GlobalContext);
    
   const selectCatOptions = categoryBudgets.map((item)=>
     <option key={item.id}value={item.category}>{item.category}</option>
  )
  console.log(categoryBudgets);
  const add = (e) =>{
    e.preventDefault();
   
    const newTransaction = {
      category,
      budget:parseFloat(amount),
      date: new Date()
      }
      addCategoryBudget(newTransaction);
      console.log(categoryBudgets);
      axios.post(`/api/categories/allowances/1`,newTransaction)
      .then ((res) => {
       console.log("OK");
      })
      .catch((err) => console.log(err)); 
      setAmount(0);
      setFormDisplay(!showForm);
  }
  const handleCategory = (e) =>{
    const value= e.target.value;
    setCategory(value); 
  }

  const cancel = (e) =>{
      e.preventDefault();
      setFormDisplay(!showForm)
  }

  return (
    <div className="allowance-form">
    <h3 className="add-head--allow">Add Allowances</h3>
      <form >
        <div className="form-control--allow" >
          <select onChange={handleCategory} name="category"  className="select__cat--display--allow">
            <option value="types">Please choose category...</option>
            {selectCatOptions}
          </select> 
        </div>

        <div className="form-controls--allow">
          <p className="form__label--allow">
          <label htmlFor="amount">Please Enter Amount<br /> </label>
          </p>
          <input type='number' step="0.1" className="form__input--allow" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          <br />
        </div>
        <div className='btns'>
        <button className="btn--allow-add" type="button" onClick={add}>Add</button>
        <button type="button" className="btn--allow-cancel" onClick={cancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Form;