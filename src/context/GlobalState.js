import React, { createContext, useReducer } from 'react'
import axios from 'axios';
import AppReducer from './AppReducer';


   
const initialState = {

  transactions: [],
users:[],
budgets: [  // intially budget set to zero
   {
    id: 1,
    amount:0
  }
],

}

//Create context
export const GlobalContext = createContext(initialState);

//Provider Components
//Children are everything wrapped in container App function - detsructuring the children
export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  // function deleteBudget(id) {
  //   dispatch({
  //     type: 'DELETE_BUDGET',
  //     payload: id
  //   });
  // }

  function addBudget(budget) {
    dispatch({
      type: 'ADD_BUDGET',
      payload: budget
    });
  }

  function addUser(user) {
    dispatch({
      type: 'ADD_USER',
      payload: user
    });
  }

  function loadTransactions(transactions) {
    dispatch({
      type: 'LOAD_TRANSACTIONS',
      payload: transactions
    });
  }
  function loadBudget(budget) {
    dispatch({
      type: 'LOAD_BUDGET',
      payload: budget
    });
  }

  return (
    <GlobalContext.Provider value={{
      budgets : state.budgets,
      transactions: state.transactions,
      users: state.users,
      deleteTransaction,
      addTransaction,
      addBudget,
      addUser,
      loadTransactions,
      loadBudget
    }}>
      {children}
    </GlobalContext.Provider>
  )

}

// export const GlobalState = () => {
//   return (
//     <div>GlobalState</div>
//   )
// }
