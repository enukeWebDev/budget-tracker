import './style.css';
import Content from './Content';
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import DisplayOrder from './DisplayOrder.js';
import ShowOnly from './ShowOnly';



function Transaction() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions)


  return (
    <div className='bg'>
      <h1 className='t-history_page-title'>Transaction History</h1>
      <div className='history'> 

        <div className='sort-options'>
        <DisplayOrder />
        <ShowOnly />
        </div>

          <main className="transaction-layout" > 
            <ul className="transaction-list">
              { transactions.map(transaction => (<Content key={transaction.id} transaction={transaction} />)) }
            </ul>
          </main>

        <div className='end-of-page'>
        End of Page
        </div>
      </div>
    </div>
  );
}

export default Transaction;
