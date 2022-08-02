import styled from 'styled-components';
import './App.css';
import Banner from './component/Banner';
import Delivery from './component/Delivery';
import Exp from './component/Experience';
import Header from './component/Header';
import Review from './component/Review';
import Story from './component/Story';
import Tip from './component/Tip';

import { onBoardMockData } from "./mock";

const ViewWrap = styled.div`
  position: relative;
`;

function App() {
  return (
    <ViewWrap className="App">
        <Header>OnBoard</Header>
        <Banner />
        <Delivery />
        <Review data={onBoardMockData.productReview}/>
        <Story />
        <Tip />
        <Exp />
    </ViewWrap>
  );
}

export default App;
