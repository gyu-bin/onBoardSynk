import React from 'react'
import styled from 'styled-components';
import BannerImg from '../images/banner_bg.png'

//Banner Img
const Img=styled.img`
  width: 100%;
  height: 10%;
  max-height: 500px;
  position: relative;
`

const Container=styled.div`
  position: relative;
`

const BannerText=styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  text-align: left;
  white-space: pre-wrap;
`
const Main=styled.div`
  font-size: 30px;
  max-width: 100%;
  width: 84%;
  color: brown;
  font-weight: bold;
`
const Sub=styled.div`
  color: brown;
`
function Banner(){
    return(
        <Container>
            <Img src={BannerImg} alt={BannerImg}/>
            <BannerText><Main>에어로타워 제품과 함께하는 다채로운 라이프</Main>
                <Sub>미리 살펴볼까요?</Sub></BannerText>

        </Container>
    )
}

export default Banner;