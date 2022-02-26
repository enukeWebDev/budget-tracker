import { React, useState, useContext } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { GlobalContext } from '../context/GlobalState';
import { refactorBudgets } from './Allowances/helper.js';
import MicIcon from '@mui/icons-material/Mic';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import './speech.css';
import AddIcon from './AddIcon';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

const Dictaphone = (props) => {
  const [message, setMessage] = useState('');
<<<<<<< HEAD
  const { addTransaction, categoryBudgets } = useContext(GlobalContext);

=======
  const {form,openForm} = props;
  const { addTransaction,categoryBudgets} = useContext(GlobalContext);
  
>>>>>>> 1deae7546ea46346b96f7042a21ceec2db321b68
  const styles = {

    largeIcon: {
      width: 50,
      height: 50,

    },

  };
  const commands = [
    {
      command: '(add) expense to :category :money (dollars)',
      callback: (category, money) => {
        console.log(category, money);
        const unique_id = uuid();
        const categoryBudget = refactorBudgets(categoryBudgets);
        const key = Object.keys(categoryBudget);
        const amount = money.substring(1);

        let categoryCaptilaized = category[0].toUpperCase() + category.substring(1)

        const cat = key.includes(categoryCaptilaized) ? categoryCaptilaized : "Others";
        const small_id = unique_id.slice(0, 8)
        const newTransaction = {
          id: small_id,
          category: cat,
          amount: parseFloat(amount),
          date: new Date(),
        }
        console.log(newTransaction);
        addTransaction(newTransaction);

        axios.post(`/api/transactions/1`, newTransaction)
          .then((res) => {
            console.log("OK");
          })
          .catch((err) => console.log(err));
      }
    },
  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });



  if (!browserSupportsSpeechRecognition) {
    console.log("Browser doesn't support speech recognition");
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (
    <div>
<<<<<<< HEAD
      <div className="mic" onMouseOver={SpeechRecognition.startListening}>
        <MicIcon style={styles.largeIcon} />
=======
      <div className="mic" onMouseOver={SpeechRecognition.startListening}> 
      {props.screenWidth < 1050 && <span onClick={() =>{openForm(!form)}}><AddIcon /></span>}
      <MicIcon className="mic-up" style={styles.largeIcon}/>
>>>>>>> 1deae7546ea46346b96f7042a21ceec2db321b68
      </div>


    </div>
  );
};
export default Dictaphone;