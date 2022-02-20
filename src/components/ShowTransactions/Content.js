import Moment from 'react-moment';
import './content.css';

function Content(props) {
  return (
    <div className="show__transaction__content" > 
     <p>
       <span className="show__date--circle">
         <Moment format='D'>{props.date}</Moment>
         </span>
       <span className="show__date--top">
         <Moment format='dddd, MMMM yyyy'>{props.date}</Moment>
       </span>
      </p>
     <p className=" transaction__amount color--red">{props.amount} </p>
     <button onClick={() => props.delete(props.id)}
         className="delete-btn">x</button>
    </div>
  );
}

export default Content;