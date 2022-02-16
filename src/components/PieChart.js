import {useContext} from 'react';
import Chart from 'react-apexcharts';
import { GlobalContext } from '../context/GlobalState';
import Moment from 'react-moment';

function PieChart(props){
 // const date  = new Date().toLocaleString() ;
  const { transactions , budgets} = useContext(GlobalContext);
  const newTransactions = [...transactions];

  let date  = new Date();
  let currentMonthLastDate  = (new Date(date.getFullYear(), date.getMonth(), 1));
  // const types =[];
  // transactions.forEach(element => {
  //    if(!types.includes(element.text)){
  //     types.push(element.text);
  //    }
  // });

  const refactorForChart = (data) =>{
    let totalExpenseByCategory={};
    data.forEach(item => {
     !totalExpenseByCategory[item.category]? totalExpenseByCategory[item.category]= item.amount:   totalExpenseByCategory[item.category] += item.amount;  
    });
   
    return totalExpenseByCategory;
 }

 const dataObj = refactorForChart(transactions);

  const amounts = transactions.map(transaction => transaction.amount);
  
  const expense = (
    amounts
      .reduce((acc, item) => (acc += item), 0) * 1)
   let total = (budgets[0].amount - expense).toFixed(2);
   
   if(budgets[0].amount === 0){
     total = 0;  
   }
  
  // const series = newTransactions.map((item) => item.amount);
  // const labels = newTransactions.map((item) => item.category);
  const series = Object.values(dataObj)
  const labels = Object.keys(dataObj);
  series.unshift(parseFloat(total));
  labels.unshift('Balance');
  console.log(series);
  console.log(labels);
  
  
  // const series =[1,2,3];
  // const labels =['a','b','c'];
  
  
  return (
    <div className="Home__page__chart">
      <div className="pie__chart__background--color">
        <p className="chart__title color--red">Total Expenses ${expense}</p>
      <Chart
       className="chart"
        type="pie"
        width={400}
        height={400}
        series={series}
        options={{
          labels:labels,
          legend: {
            fontSize: "18px"
          },
        tooltip:{
          y:{
            formatter:(val)=>{
              return `$${val}`;
            }
          }
        },
          title:{
            text: '',
            responsive:true,
            animation:{
                animateScale: true,
            }
          },
        
        }} 
      />
      <Moment className="chart__bottom chart__bottom--left" date={currentMonthLastDate} format='LL' />&nbsp;<strong>-</strong>&nbsp;
      <Moment className="chart__bottom" date={date} format='LL' />
      </div>
    </div>
  )
}

export default PieChart;