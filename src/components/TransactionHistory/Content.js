import Moment from 'react-moment';

function Content(props) {
  return (
    <div className="transaction__content" onClick={props.form}>  
     <p>
       <span className="date--top">
         <Moment format='dddd, MMMM DD, yyyy'>{props.date}</Moment>
       </span>
      </p>
     <p className="color--red">${props.amount} </p>
    </div>
  );
}

export default Content;