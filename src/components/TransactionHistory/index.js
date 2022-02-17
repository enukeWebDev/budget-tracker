import './style.scss';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";

const content =[{
  id : 1,
  date:"2022-02-12",
  amount: 50
},
{  
  id: 2,
  date:"2022-02-12",
 amount: 50
},
{ 
  id :3,
  date:"2022-02-12",
 amount: 50
}
];

function Transaction() {
  const[transactions,setTransactions] = useState([]);
  const contentDisplay = content.map((item)=> {
   return <Content key={item.id} date={item.date} amount={item.amount} />
  })

  useEffect(()=>{
    let date  = new Date();
    let currentMonthStartDate  = (new Date(date.getFullYear(), date.getMonth(), 1)).toLocaleDateString();
    let currentMonthLastDate  = (new Date(date.getFullYear(), date.getMonth()+1, 0)).toLocaleDateString();
    let userId = 1;

    axios.get(`api/users/${userId}/transactions?start_date=${currentMonthStartDate}&end_date=${currentMonthLastDate}`)
    .then((res) => {
       setTransactions(res.data);
    })
  },[])

  return (
    <div className='history'> 
    <main className="transaction--layout" > 
       <Header category="Food" expense="100" content={content}/>
       {contentDisplay}

       <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      
    </main>
    </div>
  );
}

export default Transaction;
