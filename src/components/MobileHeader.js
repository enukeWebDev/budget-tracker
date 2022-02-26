
import './MobileHeader.css';
import Moment from 'react-moment';
import { BudgetExpenseMobile } from './BudgetExpenseMobile';

const MobileHeader =(props) =>{
  let date  = new Date();

  return (
    <>
      <Moment className="mobile-head-date" date={date} format='MMM YYYY' />
      <div onClick={() => props.setSelectedCategory("")}>
     <BudgetExpenseMobile />
     </div>
   </>
  )
}

export default MobileHeader;