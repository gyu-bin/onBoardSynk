import React from 'react';
import styled from 'styled-components';
import Section from '../component/Section';
import Title from '../component/Title';
import IconLg from '../images/logo_lg.png';
import { onBoardMockData } from "../mock";

const StoryContainer = styled.div`
  position: relative;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`;

const StoryImg = styled.img`
  width: 100%;
  height: auto; 
`;

const StoryText = styled.div`
  position: relative;
  @media screen and (min-width: 600px) {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;

const StoryTitle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
  margin-top: 17px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: bold;
  @media screen and (min-width: 600px) {
    margin-top: 0;
  }
`;

const StoryDesc = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 600px) {
    white-space: unset;
  }
`;

const StoryImgDiv = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    flex: 1;
    margin-right: 10px;
  }
`;

const StoryThumnail = styled.div`
  text-decoration: none;
  overflow: hidden;
  border-radius: 10px;
  font-size: 0;
`;

const Api = onBoardMockData.LGcontent;

function Story(){
  return(
    <Section>
      <StoryContainer>
        <Title link={`https://m.naver.com`} iconSrc={IconLg} iconText={`LG 로고`}>
          에어로타워 스토리
        </Title>
        {Api.map(({ contentId, contentUrl, thumbnail, contentTitle, contentDescription }) => (
            <Link href={contentUrl}>
              <StoryImgDiv key={contentId}>
                <StoryThumnail>
                  <StoryImg src={thumbnail} alt={'리뷰 이미지'}/>
                </StoryThumnail>
              </StoryImgDiv>
              <StoryText>
                <StoryTitle>{contentTitle}</StoryTitle>
                <StoryDesc>{contentDescription}</StoryDesc>
              </StoryText>
            </Link>
        ))}
      </StoryContainer>
    </Section>
  );
}

export default Story;