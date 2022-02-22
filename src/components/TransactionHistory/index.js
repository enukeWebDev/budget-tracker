import './style.css';
import Content from './Content';
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import DisplayOrder from './DisplayOrder';
import ShowOnly from './ShowOnly';



function Transaction() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions)


  return (
    <>
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
      </div>
    </>
  );
}

export default Transaction;
