import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './index.css';
import Topbar from './Top';
import Bottombar from './Bottom';
import Form from './Form';

//Instead of passing props - just in transaction and destructure for simplicity
const Allowances = () => {
  const [showForm , setFormDisplay] = useState(false);
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <div className="allowances">
        <Topbar setFormDisplay={setFormDisplay} showForm={showForm}/>
        <Bottombar />
      
      </div>
        {showForm && <Form  setFormDisplay={setFormDisplay} showForm={showForm}/>}
    </div>
  )
}

export default Allowances;