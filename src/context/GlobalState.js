import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

//Initial State - negative number is expense - positive is the budget
const initialState = {

  transactions: [{
    id:1,
    amount:100,
    text:'Food'
  }]

  // Sample data for testing 
  // transactions: [
  //   {
  //     id: 1,
  //     text: "Budget",
  //     amount: 100
  //   },

  //   {
  //     id: 2,
  //     text: "Phone",
  //     amount: -20
  //   },

  //   {
  //     id: 3,
  //     text: "Food",
  //     amount: -10
  //   },

  //   {
  //     id: 4,
  //     text: "Gas",
  //     amount: -20
  //   }
  // ]
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


  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
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
