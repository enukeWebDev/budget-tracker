import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

//Initial State - negative number is expense - positive is the budget
const initialState = {

  transactions: [
    
    // {}    id: 1,
    //     category:"food";  //test data;
    //     amount: 100
    //   }, 
],
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

  return (
    <GlobalContext.Provider value={{
      budgets : state.budgets,
      transactions: state.transactions,
      users: state.users,
      deleteTransaction,
      addTransaction,
      addBudget,
      addUser
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
