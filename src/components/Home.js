import { React, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Balance } from './Balance';
import { BudgetExpense } from './BudgetExpense';
import { AddTransaction } from './AddTransaction';
import { ShowTransactions } from './ShowTransactions';
import { ShowTransactionsMobile } from './ShowTransactionsMobile';
import './PieChart.scss'
import PieChart from './PieChart';
import './Home.css';
import { GlobalContext } from '../context/GlobalState';
import styled from 'styled-components';
import MobileHeader from './MobileHeader';
import MobilePieChart from './MobilePieChart';
import { AddTransactionMobile } from './AddTransactionMobile';

const Container = styled.div`
  
  color: ${props => props.theme.tagLineColor};
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

function Home(props) {
  const { loadTransactions, loadBudget, addBudget, loadCategoryBudget } = useContext(GlobalContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { screenWidth, form } = props;
  console.log("from homw", screenWidth);
  useEffect(() => {
    let URL1 = `/api/transactions/1`;
    let URL2 = `/api/budget/1`;
    let URL3 = `api/categories/1`
    const promise1 = axios.get(URL1);
    const promise2 = axios.get(URL2);
    const promise3 = axios.get(URL3);
    Promise.all([promise1, promise2, promise3])
      .then((res) => {
        let transactions = res[0].data;
        if (res[0].data.length > 0) {
          let refatoredTransactions = transactions.map((item) => ({
            id: item.id,
            category: item.category,
            amount: parseFloat(item.amount),
            date: item.date
          }))
          loadTransactions(refatoredTransactions);
        }
        if (res[1].data.length > 0) {
          const data = res[1].data;
          let newData = data.map((item) => ({
            id: item.id,
            amount: parseFloat(item.amount),
            date: item.date
          }))
          loadBudget(newData)
        }

        let categoryBudgets = res[2].data;
        if (res[2].data.length > 0) {
          let refatoredCategoriesBudgets = categoryBudgets.map((item) => ({
            id: item.id,
            category: item.category,
            budget: parseFloat(item.budget),
            date: item.date
          }))

          loadCategoryBudget(refatoredCategoriesBudgets);
        }

      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      {screenWidth >= 1000 &&
        <div className="whole-app">

          <div className="centre-content">
            <div className="shape">
              <Container className="left--content">
                <Balance />
                <AddTransaction />
              </Container>
              <Container className="right-content" >
                <BudgetExpense />
                <PieChart setSelectedCategory={setSelectedCategory} />
              </Container>
            </div>
            {selectedCategory &&
              <div className="side--content">
                <ShowTransactions selectedCategory={selectedCategory} />
              </div>}
          </div>
        </div>}
      {screenWidth < 1000 &&
        <div className="mobile--center">
          <MobileHeader className="mobile-head" setSelectedCategory={setSelectedCategory} />
          {form && <AddTransactionMobile className="mobile-form" />}
          {!form && <div className="mobile-chart">
            <MobilePieChart setSelectedCategory={setSelectedCategory} />
          </div>}
          {selectedCategory &&
            <div className="mobile-side--content">
              <ShowTransactionsMobile selectedCategory={selectedCategory} />
            </div>}

        </div>}
    </>
  );
}
export default Home;
