import React from 'react'
import styled from 'styled-components';


import Next from '../images/icon_next.png'
import Insta from '../images/logo_instagram.png'

import insta1 from '../images/instaContent_1.png'
import insta2 from '../images/instaContent_2.png'
import insta3 from '../images/instaContent_3.png'
import insta4 from '../images/instaContent_4.png'
import insta5 from '../images/instaContent_5.png'
import insta6 from '../images/instaContent_6.png'
import insta7 from '../images/instaContent_7.png'
import insta8 from '../images/instaContent_8.png'
import insta9 from '../images/instaContent_9.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Container=styled.div`
  
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
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`
const ListItems = styled.div`
  padding : 0.5em ;
`;

const TipImg=styled.img`
  width: 112px;
  height: 112px;
  padding: 6px;
`
const Tip=()=>{

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
                <Img src={Insta} alt={Insta}/>
                <TipMent>가전인테리어 팁</TipMent>
                <NextImg src={Next} alt={Next}/>
            </TipLogo>
                <TipArea>
                    {/*<Slider {...settings}>*/}
                        <ListItems>
                            <TipImg src={insta1} alt={insta1}/>
                            <TipImg src={insta2} alt={insta2}/>
                            <TipImg src={insta3} alt={insta3}/>
                            <TipImg src={insta4} alt={insta4}/>
                            <TipImg src={insta5} alt={insta5}/>
                            <TipImg src={insta6} alt={insta6}/>
                            <TipImg src={insta7} alt={insta7}/>
                            <TipImg src={insta8} alt={insta8}/>
                            <TipImg src={insta9} alt={insta9}/>
                            <TipImg src={insta1} alt={insta1}/>
                            <TipImg src={insta2} alt={insta2}/>
                            <TipImg src={insta3} alt={insta3}/>
                            <TipImg src={insta4} alt={insta4}/>
                        </ListItems>
                    {/*</Slider>*/}
                </TipArea>
        </Container>
    );
}

export default Tip;