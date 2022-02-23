import {React ,useState, useEffect, useContext}from 'react'
import './Welcome.css'
import Navbar from './navbar/Navbar'
import Dictaphone from './Speech.js'
import { GlobalContext } from '../context/GlobalState';

export default function Header (props) {
  const { transactions , budgets} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const expense = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const [topbar, setTopbar] = useState(true);
  const {screenWidth, form, openForm} = props;
 
  useEffect(() => {
    const location = window.location.pathname
    if (location === '/') {
      setTopbar(!topbar)
    }else {
      setTopbar(true)
    }
  }, [window.location.pathname])

  return (
    <>
   {topbar && <h2 className="welcome">
      <Navbar /> 
    <Dictaphone className="mic" screenWidth={screenWidth} form={form} openForm={openForm}/>
    

    </h2>}
    </>

  )
}