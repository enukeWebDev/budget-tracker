import Moment from 'react-moment';
import './content.css';
import axios from 'axios';

function Content(props) {
   const deleteFunc = (id) =>{
    axios.delete(`/api/transactions/1`, { data: { id: id } })
    .then ((res) => {
     console.log("OK");
    })
    .catch((err) => console.log(err)); 
    console.log("axois delete");
     props.delete(id);
   }
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
     <button onClick={() => deleteFunc(props.id)} className="delete-btn">x</button>
    </div>
  );
}

export default Content;