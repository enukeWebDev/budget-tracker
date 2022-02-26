import React, { createContext, useReducer } from 'react'
import axios from 'axios';
import AppReducer from './AppReducer';



const initialState = {

  transactions: [],
  users: [],
  budgets: [
    {
      id: 1,
      amount: 0
    }
  ],
  categoryBudgets: []

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

  function addCategoryBudget(transaction) {
    dispatch({
      type: 'ADD_CATEGORY_BUDGET',
      payload: transaction
    });
  }

  function loadCategoryBudget(transactions) {
    dispatch({
      type: 'LOAD_CATEGORY_BUDGET',
      payload: transactions
    });
  }

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
      budgets: state.budgets,
      transactions: state.transactions,
      users: state.users,
      categoryBudgets: state.categoryBudgets,
      deleteTransaction,
      addTransaction,
      addBudget,
      addUser,
      loadTransactions,
      loadBudget,
      loadCategoryBudget,
      addCategoryBudget
    }}>
      {children}
    </GlobalContext.Provider>
  )

}
