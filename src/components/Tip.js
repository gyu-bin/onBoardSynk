import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import Section from "components/Section";
import Title from "components/Title";
import IconInsta from "images/logo_instagram.png";

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
    background: ${({ theme }) => theme.colorSet.background_material_light};
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

const Tip = ({ tipData }) => {
  return(
    <Section style={{ paddingRight: "0" }}>
      <TipContainer>
        <Title className={tipData ? "" : "title-box"} iconSrc={tipData ? IconInsta : ""} iconText={`인스타그램 로고`}>
          {tipData ? "가전인테리어 팁" : "xxxxxxxxxx"}
        </Title>
        <TipArea>
          <SliderWrap>
            <Slider {...settings}>
              {!tipData && tempData.map((data, idx) => 
                <SliderItem key={idx}>
                  <div className="box img-box">
                    <Link href=""><TipImg src={imgTemp} alt="" /></Link>
                  </div>
                </SliderItem>
              )}
              {tipData && tipData.map(({ contentId, caption, thumbnail, contentUrl, bloggerName }) => (
                <SliderItem key={`tip_${contentId}`}>
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