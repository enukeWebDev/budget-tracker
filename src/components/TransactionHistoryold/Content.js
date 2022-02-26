import Moment from 'react-moment';

function Content(props) {
  console.log('--------', props)
  return (
    <div className="transaction-content" onClick={props.form}>  

     <div className='DOT'>
         <Moment className="date" format='dddd, MMMM DD yyyy'>{props.transaction.date}</Moment>
      </div>

      <div className='cost-cat'>
        <p className="category">{props.transaction.category} </p>
        <p className="cost">${props.transaction.amount} </p>
     </div>

    </div>
  );
}

export default Content;