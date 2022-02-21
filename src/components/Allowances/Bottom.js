import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ProgressBar from './ProgressBar';

import './Bottom.css';
//Instead of passing props - just in transaction and destructure for simplicity
const Bottom = () => {

  return (  
      <div className="bottom--bar" >
        <div className="bar--headers">
           <h2>Food </h2>
           <div className="show--right">
             <span className="assigned--money">500</span> 
             <span className='spent'>overspent:300</span>
           </div>
        </div>
        <ProgressBar />
      </div>
      
  )
}

 export default Bottom;