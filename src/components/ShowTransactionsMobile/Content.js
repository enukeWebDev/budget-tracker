import Moment from 'react-moment';
import './content.css';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <button onClick={() => deleteFunc(props.id)} className="delete-btn--mobile">x</button>
       <span className="show__date--circle">
         <Moment format='D'>{props.date}</Moment>
         </span>
       <span className="show__date--top">
         <Moment format='dddd, MM yyyy'>{props.date}</Moment>
       </span>
      </p>
     <p className=" transaction__amount color--red">{props.amount} </p>
    
    </div>
  );
}

export default Content;