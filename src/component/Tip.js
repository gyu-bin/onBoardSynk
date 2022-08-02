import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';
import Section from '../component/Section';
import Title from '../component/Title';
import IconInsta from '../images/logo_instagram.png';
import { AppLink } from "../libs";
import useFetch from '../useFetch';
import { onBoardMockData } from "../mock";


const TipContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width:100%;
`;

const TipArea = styled.div`
  font-size: 0;
  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-slider {
    margin-right: 10px;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent
  }

  .slick-list,
  .slick-slider {
    position: relative;
    display: block;
  }

  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:after,
  .slick-track:before {
    display: table;
    content: "";
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  .slick-slide img {
    display: block;
  }

  .slick-dots {
    margin-top: 10px;
  }
`
const SliderItem = styled.div`
  .box {
    color: #fff;
    margin: 0 10px 10px 0;
    position: relative;
    text-align: center;
  }
`;

const TipImg = styled.img`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  overflow: hidden;
`;

const Link = styled.a`
  overflow: hidden;
  text-decoration: none;
  justify-content: flex-start;
`;

const SliderWrap = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 100%;
    top: 0;
    right: 0;
    background: #fff;
  }
`;
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 1,
        speed: 500,
        rows: 3,
        slidesPerRow: 3,
        arrows: false,
    }

  const Api= onBoardMockData.instaContent;

    function Tip(){
      return(
        <Section style={{ paddingRight: "0" }}>
          <TipContainer>
            <Title link={`https://m.naver.com`} iconSrc={IconInsta} iconText={`인스타그램 로고`} style={{ paddingRight: "20px" }}>
              가전인테리어 팁
            </Title>
            <TipArea>
              <SliderWrap>
                <Slider {...settings}>
                  {Api.map(({ contentId, caption, thumbnail, contentUrl, bloggerName }) => (
                    <SliderItem key={contentId}>
                      <div className="box">
                        <Link href={contentUrl}><TipImg src={thumbnail} alt={caption}/></Link>
                      </div>
                    </SliderItem>
                  ))}
                </Slider>
              </SliderWrap>
            </TipArea>
          </TipContainer>
        </Section>
      );
    }


export default Tip;