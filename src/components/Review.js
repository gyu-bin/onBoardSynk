import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "components/atom/Button";
import Section from "components/Section";
import Title from "components/Title";
import IconReview from "images/onboard_title_ic_review.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
  padding: 10px 20px 0;
  .swiper-slide {
    flex-direction: column;
  }
  .swiper {
    padding-bottom: 26px;
    &.pageable {
      padding-bottom: 0;
    }
  }
  .swiper-pagination {
    margin-top: 26px;
  }
`;

const ReviewArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 17px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ReviewAreaDiv = styled.div`
  position: relative;
  flex-basis: 23%;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 16px;
  padding-top: 23%;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 74.3%;
`;

const ReviewImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
  width: 100%;
  height: auto;
  &.fitW {
    width: 100%;
    height: auto;
  }
  &.fitH {
    width: auto;
    height: 100%;
  }
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
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
`;

const Reviewer = styled.div`
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
  margin-top: 5px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  ${({ theme }) => theme.fontSet.Type_A06};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.secondary_text_default_material_light};
`;

const StyledButton = styled(Button)`
  justify-content: flex-start;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direaction: row;
`;

const division = (arg, num) => {
  let arr = arg;
  let len = arr.length;
  let count = Math.floor(len/num) + (Math.floor(len % num) > 0 ? 1 : 0);
  let tmp = [];
  for (let i = 0; i < count; i++) {
    tmp.push(arr.splice(0, num));
  }
  return tmp;
};

const Review = ({ reviewData }) => {
  const [isData, setData] = useState([]);

  useEffect(() => {
    if (reviewData) {
      const deepArr = [...reviewData];
      const dividedArr = division(deepArr, 3);
      setData([...dividedArr]);
    }
  }, [reviewData]);

  const [loaded, setLoaded] = useState(false);
  const refImg = useRef([]);

  // useEffect(() => {
  //   if (loaded) {
  //     refImg.current.map((imgItem, imgIndex) => {
  //       refImg.current[imgIndex].map((thumItem, thumIndex) => {
  //         let boxW = thumItem.parentElement.getBoundingClientRect().width;
  //         let thumW = refImg.current[imgIndex][thumIndex].width;
  //         let thumH = refImg.current[imgIndex][thumIndex].height;
  //       })
  //     })
      
  //   }
  // }, [loaded]);

  return (
    <Section space={false}>
      <Title className={reviewData ? "" : "title-box"} iconSrc={reviewData ? IconReview : ""} iconText={``}>
        {reviewData ? "꼼꼼 리뷰" : "xxxxxxxxxx"}
      </Title>
      <RevAll>
        <Swiper spaceBetween={10} pagination={true} modules={[Pagination]} className={isData && isData.length > 1 ? "pageable" : ""}>
          {!isData && tempData.map((data, idx) => 
            <ReviewArea key={idx}>
              <StyledButton href="">
                <ReviewAreaDiv className="img-box">
                  <ReviewImg src={imgTemp} alt=""/>
                </ReviewAreaDiv>
                <ReviewContent>
                  <ReviewText className="text-box">xxxxxxxxxxxxxx</ReviewText>
                  <Reviewer className="text-box">xxxxxxxx</Reviewer>
                </ReviewContent>
              </StyledButton>
            </ReviewArea>
          )}
          {isData && isData.map((slideItem, slideIndex) => { 
            refImg.current[slideIndex] = [];
            return (
              <SwiperSlide className="swiperBox" key={`review_${slideIndex}`}>
                {slideItem.map((boxItem, boxIndex) => {
                  return (
                    <ReviewArea key={`reviewBox_${boxIndex}`}>
                      <StyledButton href={boxItem.contentUrl}>
                        <ReviewAreaDiv>
                          <ReviewImg
                            src={boxItem.thumbnail}
                            alt={``}
                            ref={(el) => (refImg.current[slideIndex][boxIndex] = el)}
                            onLoad={() => setLoaded(true)}
                          />
                        </ReviewAreaDiv>
                        <ReviewContent>
                          <ReviewText>{boxItem.contentTitle}</ReviewText>
                          <Reviewer>{boxItem.bloggerName}</Reviewer>
                        </ReviewContent>
                      </StyledButton>
                    </ReviewArea>
                  )
                })}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </RevAll>
    </Section>
  );
}

export default Review;