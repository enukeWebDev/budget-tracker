import Moment from 'react-moment';

function Content(props) {
  console.log('--------', props)
  return (
    <div className="transaction-content" onClick={props.form}>  
     <p>
       <span className="date">
         <Moment format='dddd, MMMM DD yyyy'>{props.transaction.date}</Moment>
       </span>
      </p>
      <p className="cost">{props.transaction.category} </p>
     <p className="cost">${props.transaction.amount} </p>

    </div>
  );
}

export default Content;