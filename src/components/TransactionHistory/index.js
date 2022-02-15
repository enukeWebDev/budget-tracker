import './style.scss';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";

const content =[{
  id : 1,
  date:"12-02-2022",
  amount: 50
},
{  
  id: 2,
  date:"12-02-2022",
 amount: 50
},
{ 
  id :3,
  date:"12-02-2022",
 amount: 50
}
];

function Transaction() {
  const[transactions,setTransactions] = useState([]);
  const contentDisplay = content.map((item)=> {
   return <Content date={item.date} amount={item.amount} />
  })

  useEffect(()=>{
    axios.get('api/users/1/transactions')
    .then((res) => {
       setTransactions(res.data);
    })
  },[])

  return (
    <main className="transaction--layout" > 
   
       <Header category="Food" expense="100" content={content}/>
       {contentDisplay}
      
       
      
    </main>
  );
}

export default Transaction;
