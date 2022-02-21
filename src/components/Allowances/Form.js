import {useState, useContext} from 'react';
import './form.css';
import { GlobalContext } from '../../context/GlobalState';

const Form = () =>{
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const onSubmit = () =>{

  }
  const handleCategory = () =>{

  }

  return (
    <div class="allowance-form">
    <h3 className="add-head--allow">Add Allowances</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control--allow" >
          <select onChange={handleCategory} name="category"  className="select__cat--display--allow">
            <option value="types">Please choose category...</option>
            {/* {selectCatOptions} */}
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
        <button className="btn--allow-add" >Add</button>
        <button className="btn--allow-cancel" >Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Form;