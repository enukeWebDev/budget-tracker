import Moment from 'react-moment';

function Content({transaction}) {
  console.log(transaction)
  return (
    <div className="transaction__content" onClick={transaction.form}>  
     <p>
       <span className="date--circle">
         <Moment format='D'>{transaction.date}</Moment>
         </span>
       <span className="date--top">
         <Moment format='dddd, MMMM yyyy'>{transaction.date}</Moment>
       </span>
      </p>
     <p className="color--red">${transaction.amount} </p>
    </div>
  );
}

export default Content;