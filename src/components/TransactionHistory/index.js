import './style.scss';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import { useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import { GlobalContext } from '../../context/GlobalState';

function Transaction() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='history'>
      <main className="transaction--layout" >
      </main>
    </div>
  );
}

export default Transaction;
