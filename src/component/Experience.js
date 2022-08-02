import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components';


import Next from '../images/icon_next.png'
import youtube from '../images/logo_youtube.png'

import youContent1 from '../images/youContent_1.jpg'
import youContent2 from '../images/youContent_2.jpg'
import youContent3 from '../images/youContent_3.jpg'
import youContent4 from '../images/youContent_4.jpg'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Container=styled.div`
  margin: 10px 0 10px 0;
`

const TipLogo=styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
`

const Img=styled.img`
  width: 25px;
  height: 25px;
`
const TipMent=styled.div`
  font-weight: 700;
  font-size: 15px;
  margin-left: 5px;
`

const NextImg=styled.img`
  width: 15px;
  height: 15px;
  margin-top: 2px;
  margin-left: 7px;
`

const TipArea=styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 1%;
  margin-top: 2%;
`
const ListItems = styled.div`
  border: 1px solid lightgrey;
  border-radius: 15px;
  margin: 0 5px 0 5px
`;

const TipImg=styled.img`
  width: 94%;
  height: 10%;
  border-radius: 10px;
`

const ListName=styled.div`
  margin-bottom: 10px;
`
const Experience=()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <Container>
            <TipLogo>
                <Img src={youtube} alt={youtube}/>
                <TipMent>생생체험기</TipMent>
                <NextImg src={Next} alt={Next}/>
            </TipLogo>

            <TipArea>
              {/*1*/}
              <Slider {...settings}>
                 <ListItems >
                     <TipImg src={youContent3} alt={youContent3}/>
                     <div>Welcome 다라 하우스! | 랜선 집들이 Part. 1🏠😘</div>
                     <ListName>DARA TV</ListName>
                </ListItems>

                <ListItems>
                    <TipImg src={youContent2} alt={youContent2}/>
                    <div>디자인만큼 사용성은? 새롭게 등장한 공기청정팬, LG 퓨리케어 에어로타워 오브제컬렉션</div>
                    <ListName>톡써니</ListName>
                </ListItems>

                  <ListItems>
                      <TipImg src={youContent1} alt={youContent1}/>
                      <div>디자인만큼 사용성은? 새롭게 등장한 공기청정팬, LG 퓨리케어 에어로타워 오브제컬렉션</div>
                      <ListName>톡써니</ListName>
                  </ListItems>

                  <ListItems>
                      <TipImg src={youContent4} alt={youContent4}/>
                      <div>디자인만큼 사용성은? 새롭게 등장한 공기청정팬, LG 퓨리케어 에어로타워 오브제컬렉션</div>
                      <ListName>톡써니</ListName>
                  </ListItems>

                </Slider>
                </TipArea>
        </Container>
    );
}

export default Experience;