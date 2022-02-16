import {useContext} from 'react';
import Chart from 'react-apexcharts';
import { GlobalContext } from '../context/GlobalState';
import Moment from 'react-moment';

function PieChart(props){
 // const date  = new Date().toLocaleString() ;
  const { transactions } = useContext(GlobalContext);
  const newTransactions = [...transactions];
  let date  = new Date();
  let currentMonthStartDate  = (new Date(date.getFullYear(), date.getMonth(), 1)).toLocaleDateString();
  let currentMonthLastDate  = (new Date(date.getFullYear(), date.getMonth()+1, 0)).toLocaleDateString();
     
  const series = newTransactions.map((item) => item.amount);
  const labels = newTransactions.map((item) => item.text);
  
  const expense = (
    series
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);
  
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
      <p className="chart__title">
      <Moment format='LL'>currentMonthLastDate</Moment></p>
      </div>
    </div>
  )
}

export default PieChart;