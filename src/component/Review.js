import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';
import Section from '../component/Section';
import Title from '../component/Title';
import IconNaver from '../images/logo_naverblog.png';
import prdRev6 from '../images/productReview_6.png';
import { AppLink } from "../libs";
import { onBoardMockData } from "../mock";

const RevAll = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
`;

const ReviewArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 17px;
`;

const ReviewAreaDiv = styled.div`
  flex-basis: 30%;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
  aspect-ratio: 4 / 2.5;

`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ReviewImg = styled.img`
  width: 100%;
  height: auto;
`;

const ReviewText = styled.div`
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;
  color: #111111;
`;

const Reviewer = styled.div`
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
  margin-top: 2px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  font-size: 13px;
  line-height: 19px;
  font-weight: 400;
  color: #626262;
`;

const Link = styled.a`
  text-decoration: none;
  justify-content: flex-start;
  overflow: hidden;
  display: flex;
`;

const Review = () => {
  const [mainImg, setmainImg] = useState([[{}]]);
  const [text,onChangeText]=React.useState("");
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isPress, setIsPress] = React.useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [Search, setSearch] = useState([{}]);
  const onChangeSearch = query => setSearchQuery(query);
  const [searchVal, setSearchVal] = useState("");
  const [user, setUser] = useState(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef=useRef(null);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    arrows: false,
  }
  const Api= onBoardMockData.productReview;

  return (
    <Section>
      <Title link={`https://m.naver.com`} iconSrc={IconNaver} iconText={`네이버 로고`}>
        꼼꼼 리뷰
      </Title>
      <RevAll>
        <Slider {...settings}>
          {Api.map(({ contentId, contentUrl, thumbnail, contentTitle, bloggerName }) => (
            <ReviewArea key={contentId}>
              <Link href={contentUrl}>
                <ReviewAreaDiv>
                  <ReviewImg src={thumbnail} alt={'리뷰 이미지'}/>
                </ReviewAreaDiv>
                <ReviewContent>
                  <ReviewText>{contentTitle}</ReviewText>
                  <Reviewer>{bloggerName}</Reviewer>
                </ReviewContent>
              </Link>
            </ReviewArea>
          ))}
        </Slider>

      </RevAll>
    </Section>
  );
}

export default Review;
