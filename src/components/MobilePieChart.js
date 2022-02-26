import {useContext} from 'react';
import Chart from 'react-apexcharts';
import { GlobalContext } from '../context/GlobalState';
import Moment from 'react-moment';

function MobilePieChart(props){
 // const date  = new Date().toLocaleString() ;
  const { transactions , budgets} = useContext(GlobalContext);
  let date  = new Date();
  let currentMonthLastDate  = (new Date(date.getFullYear(), date.getMonth(), 1));
  
  const refactorForChart = (data) =>{
    let totalExpenseByCategory={};
    data.forEach(item => {
     !totalExpenseByCategory[item.category]? totalExpenseByCategory[item.category]= item.amount:   totalExpenseByCategory[item.category] += item.amount;  
    });
   
    return totalExpenseByCategory;
 }

  const dataObj = refactorForChart(transactions);

  const amounts = transactions.map(transaction => transaction.amount);
  
  const expense = amounts.reduce((acc, item) => (acc += item), 0) 
   let total = (budgets[0].amount - expense).toFixed(2);
   
   if(budgets[0].amount === 0){
     total=0;
   }
  
  const series = Object.values(dataObj)
  const labels = Object.keys(dataObj);
  series.unshift(parseFloat(total));
  labels.unshift('Budget');

  return (
    <div className="Home__page__chart">
      <div className="pie__chart__background--color">
      <Chart
       className="chart"
        type="pie"
        width={300}
        height={300}
        series={series}
        options={{
          labels:labels,
          legend: {
            show:false,
            fontSize:"14x",

          },
        tooltip:{
           enabled: true,
          y:{
            formatter:(val)=>{
              return `$${val}`;
            }
          }
        }, 
        chart: {
          events: {
            dataPointSelection: (event, chartContext, config) => {
              console.log(config.dataPointIndex);
              if(config.dataPointIndex > 0){
              {props.setSelectedCategory(labels[config.dataPointIndex])}
              } else {
              {props.setSelectedCategory("")}
              }
            }
          }
        }   
        }
      
      
      } 
      />
      </div>
    </div>
  )
}

export default MobilePieChart;