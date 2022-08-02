import React from 'react'
import styled from 'styled-components';

import lg from '../images/logo_lg.png'
import Next from "../images/icon_next.png";
import Img from '../images/lgcontent_1.png'

const Container = styled.div`
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 4px solid lightgray;
`

const LogoImg=styled.img`
  width: 25px;
  height: 25px;
`
const NextImg=styled.img`
  width: 15px;
  height: 15px;
  margin-top: 5px;
  margin-left: 5px;
`

const StoryMentArea=styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
`

const StoryMent=styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-left: 5px;
`

const StoryArea=styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2%;
`
const StoryImg=styled.img`
  width: 90%;
  height: 80%;
  display: block;
  margin: auto;
  border-radius: 10px;
  padding-top: 5px;
`

const StoryTitle=styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`
const StoryDesc=styled.div`
  margin-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`
function Story(){
    return(
        <Container>
            <StoryMentArea>
                <LogoImg src={lg} alt={lg}/>
                <StoryMent>에어로타워 스토리</StoryMent>
                <NextImg src={Next} alt={Next}/>
            </StoryMentArea>
            <StoryArea>
                <StoryImg src={Img} alt={Img}/>
                <StoryTitle>
                    공기 질이 곧 삶의 질 없으면 후회하는 삶의 질 상승템
                </StoryTitle>
                <StoryDesc>
                    공기만 달라져도 바뀌는 건강하고 청정한 일상 에어로타워로 우리 집 공기질이 달라져요. 계절에 상관없이 사계절 내내 쾌적한 공기를 더해주는 에어로타워로 일상을 업그레이드 하세요.
                </StoryDesc>
            </StoryArea>
        </Container>
    );
}

export default Story;