import React from "react";
import styled from "styled-components";
import Button from "components/atom/Button";
import Section from "components/Section";
import Title from "components/Title";
import IconYoutube from "images/logo_youtube.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const imgTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAENCAMAAADg0Eb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTgzMUMzQTEyRTY3MTFFRDk3RTBEQTY3QjlGRTM3N0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTgzMUMzQTIyRTY3MTFFRDk3RTBEQTY3QjlGRTM3N0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODMxQzM5RjJFNjcxMUVEOTdFMERBNjdCOUZFMzc3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxODMxQzNBMDJFNjcxMUVEOTdFMERBNjdCOUZFMzc3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgUUWyQAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAl0lEQVR42uzBMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJsAAwD5fAABtrChTAAAAABJRU5ErkJggg==';

const tempDate = [
  {idx:0},
  {idx:1}
];
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
  box-sizing: border-box;
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
  text-decoration: none;
  ${({ theme }) => theme.fontSet.Type_A08};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

const ListName = styled.div`
  display: -webkit-box;
  overflow: hidden !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  ${({ theme }) => theme.fontSet.Type_A06};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.onboard_color_type3};
`;

const StyledButton = styled(Button)`
  display: block;
  overflow: hidden;
  text-decoration: none;
  justify-content: flex-start;
  border-radius: 15px;
  font-size: 0 !important;
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
  border: 1px solid ${({ theme }) => theme.colorSet.list_separator_background_color};
  text-align: left;
`;

const Experience = ({ expData }) => {
  return(
    <Section style={{ paddingBottom: "60px" }}>
      <ExperienceContainer>
        <Title className={expData ? "" : "title-box"} link={`https://m.youtube.com`} iconSrc={expData ? IconYoutube : ""} iconText={`Youtube 로고`} style={{ paddingRight: "20px" }}>
          {expData ? "생생체험기" : "xxxxxxxxxx"}
        </Title>
        <TipArea>
          <Swiper spaceBetween={10} loop={true}>
            {!expData && tempDate.map((data, idx) => 
              <SwiperSlide>
                <ListItems key={idx}>
                  <StyledButton href="#none">
                    <div className="img-box">
                      <TipImg src={imgTemp} alt=""/>
                    </div>
                    <TipInfo>
                      <ListTitle className="text-box">xxxxxxxxxx</ListTitle>
                      <ListName className="text-box">xxxxxxxxxxxxxx</ListName>
                    </TipInfo>
                  </StyledButton>
                </ListItems>
              </SwiperSlide>
            )}
            {expData && expData.map(({ contentId, contentType, contentUrl, thumbnail,channelName, contentTitle, viewCount }) => (
              <SwiperSlide>
                <ListItems key={`experience_${contentId}`}>
                  <StyledButton href={contentUrl}>
                    <TipImg src={thumbnail} alt={'체험기 이미지'}/>
                    <TipInfo>
                      <ListTitle>{contentTitle}</ListTitle>
                      <ListName>{channelName}</ListName>
                    </TipInfo>
                  </StyledButton>
                </ListItems>
              </SwiperSlide>
            ))}
          </Swiper>
        </TipArea>
    </ExperienceContainer>
  </Section>
  );
}

export default Experience;