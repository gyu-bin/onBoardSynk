import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';
import Section from '../component/Section';
import Title from '../component/Title';
import IconYoutube from '../images/logo_youtube.png';
import { AppLink } from "../libs";
import { onBoardMockData } from "../mock";

const ExperienceContainer = styled.div`
  position: relative;
  overflow: hidden;
  .slick-list {
    padding: 0 60px 0 0 !important;
  }
`;

const TipArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItems = styled.div`
  overflow: hidden;
  padding-right: 8px;
  box-sizing: border-box;
  .slick-initialized .slick-slide {
    font-size: 0;
  }
`;

const TipImg = styled.img`
  width: 100%;
`;

const ListTitle = styled.p`
  display: -webkit-box;
  overflow: hidden !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
`;

const ListName = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: #757575;
  display: -webkit-box;
  overflow: hidden !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
`;

const Link = styled.a`
  display: block;
  overflow: hidden;
  text-decoration: none;
  justify-content: flex-start;
  border-radius: 15px 15px 0 0;
`;

const TipInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 100px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 0 0 15px 15px;
  border: 1px solid rgba(236,236,236,1);
`;
const Api = onBoardMockData.youtube;

const Experience = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  }

  return(
    <Section style={{ paddingRight: "0", paddingBottom: "30px" }}>
      <ExperienceContainer>
        <Title link={`https://m.youtube.com`} iconSrc={IconYoutube} iconText={`네이버 로고`} style={{ paddingRight: "20px" }}>
          생생체험기
        </Title>
        <TipArea>
            <Slider {...settings}>
              {Api.map(({ contentId,contentType, contentUrl, thumbnail,channelName, contentTitle, viewCount }) => (
                <ListItems key={contentId}>
                  <Link href={contentUrl}>
                      <TipImg src={thumbnail} alt={'체험기 이미지'}/>
                    <TipInfo>
                      <ListTitle>{contentTitle}</ListTitle>
                      <ListName>{channelName}</ListName>
                    </TipInfo>
                  </Link>
                </ListItems>
              ))}
            </Slider>
        </TipArea>
    </ExperienceContainer>
  </Section>
  );
}

export default Experience;