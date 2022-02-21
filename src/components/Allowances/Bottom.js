import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ProgressBar from './ProgressBar';
import './Bottom.css';
import classNames from "classnames";

const Bottom = (props) => {
  let spentClass = classNames('spent');
  console.log(props);
  const {category, budget, spending} = props;
  const progress = budget-spending;

  let text ="";
  let value;
  
  if(progress === 0){
    text =`Spent : ${spending}`;
    value = 100;
  }
  if(progress > 0){
    text=`left : ${progress}`;
    value = (spending/budget)*100;
  }
  if(spending === undefined) {
    text=`left : ${budget}`;
    value =0;
  }
  if(progress < 0){
    text=`overspent : ${progress* -1}`;
    value = 100;
    spentClass = classNames('spent','color--red');
  }

  return (  
      <div className="bottom--bar" >
        <div className="bar--headers">
           <h2>{category}</h2>
           <div className="show--right">
             <span className="assigned--money">{budget}</span> 
             <span className={spentClass} >{text}</span>
           </div>
        </div>
        <ProgressBar  value={value}/>
      </div>
      
  )
}

 export default Bottom;