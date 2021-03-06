import { act } from "react-dom/cjs/react-dom-test-utils.production.min"

export default (state, action) => {
    
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }

      case 'LOAD_TRANSACTIONS':
        return {
          ...state,
          transactions: action.payload
        }

        case 'LOAD_BUDGET':
          return {
            ...state,
            budgets: action.payload
          }

    case 'ADD_BUDGET':
      return {
        ...state,
        budgets:[action.payload]

      }

      case 'ADD_CATEGORY_BUDGET':
        const copyCategoryBudgtes =[...state.categoryBudgets]
        copyCategoryBudgtes.map((item) =>{ 
          if(item.category === action.payload.category)
        {
          item.budget = action.payload.budget
        } 
      })
        return {
          ...state,
          categoryBudgets: [...copyCategoryBudgtes]
        }
  
      case 'LOAD_CATEGORY_BUDGET':
          return {
            ...state,
            categoryBudgets: action.payload
          }

    case 'ADD_USER':
      return {
        ...state,
        users:[action.payload]
      }


    default:
      return state;
     
  }
}