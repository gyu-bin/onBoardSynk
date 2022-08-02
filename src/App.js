import './App.css';
import Banner from '../src/component/Banner'
import Review from '../src/component/Review'
import Story from '../src/component/Story'
import Tip from '../src/component/Tip'
import Exp from '../src/component/Experience'
import {useState} from "react";

import OrderImg from './images/order.png'

import {onBoardMockData} from "./mock";

function App() {

  return (
    <div className="App">
        <div className="Header">OnBoard</div>
        <Banner/>
        <img className="Delivery" src={OrderImg} alt={OrderImg}/>
        <Review data={onBoardMockData.productReview}/>
        <Story/>
        <Tip/>
        <Exp/>
    </div>
  );
}

export default App;
