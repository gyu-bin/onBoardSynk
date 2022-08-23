import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Section from "components/Section";
import Title from "components/Title";
import IconNaver from "images/logo_naverblog.png";

const imgTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsAAAAHRCAMAAABTk/9+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY5OTQ5N0IyRTY3MTFFREEzRDZBNDQ3NDM3MzE3OUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjY5OTQ5N0MyRTY3MTFFREEzRDZBNDQ3NDM3MzE3OUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNjk5NDk3OTJFNjcxMUVEQTNENkE0NDc0MzczMTc5QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNjk5NDk3QTJFNjcxMUVEQTNENkE0NDc0MzczMTc5QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsIzNIsAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAABV0lEQVR42uzBAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MAEGAAA3AABlDI0RQAAAABJRU5ErkJggg==';

const tempData = [
  {idx:0},
  {idx:1},
  {idx:2},
];

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
  position: relative;
  flex-basis: 30%;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
  padding: 10% 0;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ReviewImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  ${({ theme }) => theme.fontSet.Type_A08};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  color: ${({ theme }) => theme.colorSet.onboard_color_black};
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
  ${({ theme }) => theme.fontSet.Type_A06};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.onboard_color_type5};
`;

const Link = styled.a`
  text-decoration: none;
  justify-content: flex-start;
  overflow: hidden;
  display: flex;
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
  arrows: false,
}
const Review = ({ reviewData }) => {
  return (
    <Section>
      {/* 링크 사용(a tag)*/}
      <Title className={reviewData ? "" : "title-box"} link={`https://m.naver.com`} iconSrc={reviewData ? IconNaver : ""} iconText={`네이버 로고`}>
        {reviewData ? "꼼꼼 리뷰" : "xxxxxxxxxx"}
      </Title>
      {/* onClick 사용(button tag)*/}
      {/* <Title className={reviewData ? "" : "title-box"} onClick={() => {window.location.href='https://m.naver.com'}} iconSrc={reviewData ? IconNaver : ""} iconText={`네이버 로고`}>
        {reviewData ? "꼼꼼 리뷰" : "xxxxxxxxxx"}
      </Title> */}
      <RevAll>
        <Slider {...settings}>
          {!reviewData && tempData.map((data, idx) => 
            <ReviewArea key={idx}>
              <Link href="">
                <ReviewAreaDiv className="img-box">
                  <ReviewImg src={imgTemp} alt=""/>
                </ReviewAreaDiv>
                <ReviewContent>
                  <ReviewText className="text-box">xxxxxxxxxxxxxx</ReviewText>
                  <Reviewer className="text-box">xxxxxxxx</Reviewer>
                </ReviewContent>
              </Link>
            </ReviewArea>
          )}
          {reviewData && reviewData.map(({ contentId, contentUrl, thumbnail, contentTitle, bloggerName }) => (
            <ReviewArea key={`review_${contentId}`}>
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