import Moment from 'react-moment';

function Content(props) {
  return (
    <div className="transaction-content" onClick={props.form}>  
     <p>
       <span className="date">
         <Moment format='dddd, MMMM DD yyyy'>{props.date}</Moment>
       </span>
      </p>

     <p className="cost">${props.amount} </p>

    </div>
  );
}

export default Content;