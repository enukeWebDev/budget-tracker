import './style.css';
import Content from './Content';
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';


function Transaction() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions)


  return (
    <div className='history'> 
    <main className="transaction-layout" > 

       <ul className="transaction-list">
        { transactions.map(transaction => (<Content key={transaction.id} transaction={transaction} />)) }
      </ul>
      
    </main>
    </div>
  );
}

export default Transaction;
