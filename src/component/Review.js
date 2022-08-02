import React, {useState} from 'react'
import styled from 'styled-components';

import Naver from '../images/logo_naverblog.png'
import Next from '../images/icon_next.png'

import prdRev1 from '../images/productReview_1.png'
import prdRev2 from '../images/productReview_2.png'
import prdRev3 from '../images/productReview_3.png'
import prdRev4 from '../images/productReview_4.png'
import prdRev5 from '../images/productReview_5.png'
import prdRev6 from '../images/productReview_6.png'
import prdRev7 from '../images/productReview_7.png'
import prdRev8 from '../images/productReview_8.png'
import prdRev9 from '../images/productReview_9.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Container=styled.div`
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 4px solid lightgray;
`

const Img=styled.img`
  width: 25px;
  height: 25px;
`

const ReviewMentArea=styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
`
const ReviewMent=styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-left: 5px;
  
`
const NextImg=styled.img`
  width: 15px;
  height: 15px;
  margin-top: 5px;
  margin-left: 5px;
`

const RevAll=styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const ReviewArea=styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`

const ReviewContent=styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`

const ReviewImg=styled.img`
  width: 90%;
  height: 270px;
  border-radius: 10px;
`

const ReviewText=styled.div`
  font-weight: 700;
  font-size: 15px;
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Reviewer=styled.div`
  font-size: 15px;
`
const Review=()=> {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

        return (
            <Container>
                <ReviewMentArea>
                    <Img src={Naver} alt={Naver}/>
                    <ReviewMent>꼼꼼 리뷰</ReviewMent>
                    <NextImg src={Next} alt={Next}/>
                </ReviewMentArea>
                <RevAll>
                    {/*1*/}
                    <Slider {...settings}>
                        <ReviewArea>
                            <ReviewImg src={prdRev1} alt={prdRev1}/>
                            <ReviewContent>
                                <ReviewText>인테리어 가전 LG퓨리케어 에어로타워 오브제컬렉션 청정한 공간으로 만들어주는 공기청정팬</ReviewText>
                                <Reviewer>똑소리나는우새댁</Reviewer>
                            </ReviewContent>
                        </ReviewArea>

                        <ReviewArea>
                            <ReviewImg src={prdRev2} alt={prdRev2}/>
                            <ReviewContent>
                                <ReviewText>공간 인테리어가전 LG 퓨리케어 에어로타워 오브제컬렉션으로 홈스타일링 완성</ReviewText>
                                <Reviewer>핑크비쥬</Reviewer>
                            </ReviewContent>
                        </ReviewArea>

                        <ReviewArea>
                            <ReviewImg src={prdRev2} alt={prdRev2}/>
                            <ReviewContent>
                                <ReviewText>공간 인테리어가전 LG 퓨리케어 에어로타워 오브제컬렉션으로 홈스타일링 완성</ReviewText>
                                <Reviewer>핑크비쥬</Reviewer>
                            </ReviewContent>
                        </ReviewArea>

                        <ReviewArea>
                            <ReviewImg src={prdRev2} alt={prdRev2}/>
                            <ReviewContent>
                                <ReviewText>공간 인테리어가전 LG 퓨리케어 에어로타워 오브제컬렉션으로 홈스타일링 완성</ReviewText>
                                <Reviewer>핑크비쥬</Reviewer>
                            </ReviewContent>
                        </ReviewArea>
                    </Slider>


                    {/*2*/}
                 {/*   <ReviewArea>
                        <ReviewImg src={prdRev2} alt={prdRev2}/>
                        <ReviewContent>
                            <ReviewText>공간 인테리어가전 LG 퓨리케어 에어로타워 오브제컬렉션으로 홈스타일링 완성</ReviewText>
                            <Reviewer>핑크비쥬</Reviewer>
                        </ReviewContent>
                    </ReviewArea>*/}

                    {/*3*/}
                   {/* <ReviewArea>
                        <ReviewImg src={prdRev3} alt={prdRev3}/>
                        <ReviewContent>
                            <ReviewText>LG 퓨리케어 에어로타워 오브제컬렉션 사계절 청정라이프의 시작</ReviewText>
                            <Reviewer>하율</Reviewer>
                        </ReviewContent>
                    </ReviewArea>*/}

                    {/*3*/}
                   {/* <ReviewArea>
                        <ReviewImg src={prdRev3} alt={prdRev3}/>
                        <ReviewContent>
                            <ReviewText>LG 퓨리케어 에어로타워 오브제컬렉션 사계절 청정라이프의 시작</ReviewText>
                            <Reviewer>하율</Reviewer>
                        </ReviewContent>
                    </ReviewArea>*/}
                </RevAll>
            </Container>
        );
}

export default Review;