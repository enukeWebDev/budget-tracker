import {useContext} from 'react';
import Chart from 'react-apexcharts';
import { GlobalContext } from '../context/GlobalState';
import Moment from 'react-moment';

function PieChart(props){
  const date  = new Date().toLocaleString() ;
  const { transactions } = useContext(GlobalContext);
  const series = transactions.map((item) => item.amount);
  const labels = transactions.map((item) => item.text);
  
  
  return (
    <div className="Home__page__chart">
      <Moment format='L'>'02-12-2022'</Moment>
      <Chart
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
    </div>
  )
}

export default PieChart;