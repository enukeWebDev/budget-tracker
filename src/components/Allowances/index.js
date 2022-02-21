import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './index.css';
import Topbar from './Top';
import Bottombar from './Bottom';
import Form from './Form';
import {refactorBudgets, refactorForChart} from './helper.js';
import { v4 as uuid } from 'uuid';

const Allowances = () => {
  const [showForm , setFormDisplay] = useState(false);
  const { transactions , categoryBudgets} = useContext(GlobalContext);

  const spendingsObject = refactorForChart(transactions);
  const categoryBudget = refactorBudgets(categoryBudgets);
  const key = Object.keys(categoryBudget);

  const arrayOfBudgets= key.map((item,index) =>{
  return {
     category: item,
     amount: categoryBudget[item]
   }
 })
  const filteredArray = arrayOfBudgets.filter((item) => item.amount > 0);
  console.log(filteredArray);

  const bottom = filteredArray.map(item => {
    const unique_id = uuid();
   return <Bottombar key={unique_id} category={item.category} budget={item.amount} spending={spendingsObject[item.category]} />
  })
  
  return (
    <div>
      <div className="allowances">
        <Topbar setFormDisplay={setFormDisplay} showForm={showForm}/>
        {bottom}
      
      </div>
        {showForm && <Form  setFormDisplay={setFormDisplay} showForm={showForm}/>}
    </div>
  )
}

export default Allowances;