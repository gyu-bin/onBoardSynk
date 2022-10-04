import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "components/Section";
import Title from "components/Title";
import Button from "components/atom/Button";
import IconTip from "images/onboard_title_ic_photo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const imgTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADXCAMAAAC+ozSHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1MEU0MUQyRTY2MTFFREIwMjhBMTRCMUU2NjY2QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1MEU0MUUyRTY2MTFFREIwMjhBMTRCMUU2NjY2QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzUwRTQxQjJFNjYxMUVEQjAyOEExNEIxRTY2NjZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzUwRTQxQzJFNjYxMUVEQjAyOEExNEIxRTY2NjZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsL8TV4AAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAR0lEQVR42uzBAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7yaAAAMAtWgAARlggcUAAAAASUVORK5CYII=';

const tempData = [
  {idx:0},
  {idx:1},
  {idx:2},
  {idx:3},
  {idx:4},
  {idx:5},
  {idx:6},
  {idx:7},
  {idx:8},
]
const TipContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width:100%;
  padding: 0 20px;
  .swiperBox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
  }
`;

const TipArea = styled.div`
  font-size: 0;
  .swiper {
    padding-bottom: 26px;
    &.swiper.pageable {
      padding-bottom: 0;
    }
  }
  .swiper-pagination {
    margin-top: 16px;
  }
`;

const TipImg = styled.img`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  display: block;
  overflow: hidden;
  border-radius: 10px;
  font-size: 0 !important;
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

const Tip = ({ tipData }) => {
  const [isData, setData] = useState([]);

  useEffect(() => {
    if (tipData) {
      const deepArr = [...tipData];
      const dividedArr = division(deepArr, 9);
      setData([...dividedArr]);
    }
  }, [tipData]);

  return (
    <>
      {tipData?.length !== 0 && (
        <Section>
          <Title className={tipData ? "" : "title-box"} iconSrc={tipData ? IconTip : ""} iconText={``}>
            {tipData ? "생활 속의 한 컷" : "xxxxxxxxxx"}
          </Title>
          <TipContainer>
            <TipArea>
              <Swiper spaceBetween={10} pagination={true} modules={[Pagination]} className={isData && isData.length > 1 ? "pageable" : ""}>
                {!isData && tempData.map((data, idx) => 
                  <SwiperSlide key={idx}>
                    <div className="box img-box">
                      <StyledButton href=""><TipImg src={imgTemp} alt="" /></StyledButton>
                    </div>
                  </SwiperSlide>
                )}
                {isData && isData.map((slideItem, slideIndex) => {
                  return (
                    <SwiperSlide className="swiperBox" key={`tip_${slideIndex}`}>
                      {slideItem.map((boxItem, boxIndex) => {
                        return (
                          <StyledButton href={boxItem.contentUrl} key={`reviewBox_${boxIndex}`}>
                            <TipImg src={boxItem.thumbnail} alt={boxItem.caption}/>
                          </StyledButton>
                        )
                      })}
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </TipArea>
          </TipContainer>
        </Section>
      )}
    </>
  );
}

export default Tip;