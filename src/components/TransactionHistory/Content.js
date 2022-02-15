function Content(props) {
  return (
    <div className="transaction__content">  
     <p>{props.date}</p>
     <p>${props.amount} </p>
    </div>
  );
}

export default Content;