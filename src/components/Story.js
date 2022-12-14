import React from "react";
import styled from "styled-components";
import Section from "components/Section";
import Button from "components/atom/Button";
import Title from "components/Title";
import IconStory from "images/onboard_title_ic_story.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const imgTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAsAAAJXCAMAAADCeC0zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjRBNjJENzgyRTY2MTFFRDkyRDJDQjI4N0VCNzI0MTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjRBNjJENzkyRTY2MTFFRDkyRDJDQjI4N0VCNzI0MTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE2MkQ3NjJFNjYxMUVEOTJEMkNCMjg3RUI3MjQxMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNEE2MkQ3NzJFNjYxMUVEOTJEMkNCMjg3RUI3MjQxMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmwiqqQAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAACc0lEQVR42uzBMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4mQADAHibAAH8kTxoAAAAAElFTkSuQmCC';

const StoryContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  .swiper-slide {
    width: 90%;
  }
  &.full .swiper-slide {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
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
  margin-top: 10px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  ${({ theme }) => theme.fontSet.Type_A08};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
  @media screen and (min-width: 600px) {
    margin-top: 0;
  }
`;

const StoryDesc = styled.div`
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
  margin-top: 5px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  ${({ theme }) => theme.fontSet.Type_A06};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.secondary_text_default_material_light};
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

const ListItems = styled.div`
  overflow: hidden;
  box-sizing: border-box;
`;

const Story = ({ 
  storyData,
  productName,
}) => {
  return(
    <Section style={{ paddingBottom: "25px" }}>
      <Title className={storyData ? "" : "title-box"} iconSrc={storyData ? IconStory : ""} iconText={``}>
        {storyData ? `${productName} ?????????` : "xxxxxxxxxx"}
      </Title>
      <StoryContainer className={storyData && storyData.length > 1 ? "" : "full"}>
        <Swiper spaceBetween={10} slidesPerView={"auto"} loop={storyData && storyData.length > 1 ? true : false}>
          {!storyData && (
            <SwiperSlide>
              <ListItems key={0}>
                <StyledButton href="">
                  <StoryImgDiv>
                    <StoryThumnail className="img-box">
                      <StoryImg src={imgTemp} alt=""/>
                    </StoryThumnail>
                  </StoryImgDiv>
                  <StoryText>
                    <StoryTitle className="text-box">xxxxxxxxxxxxxx</StoryTitle>
                    <StoryDesc className="text-box">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</StoryDesc>
                  </StoryText>
                </StyledButton>
              </ListItems>
            </SwiperSlide>
          )}
          {storyData && storyData.map(({ contentId, contentUrl, thumbnail, contentTitle, contentDescription }) => (
            <SwiperSlide key={`story_${contentId}`}>
              <ListItems>
                <StyledButton href={contentUrl}>
                  <StoryImgDiv>
                    <StoryThumnail>
                      <StoryImg src={thumbnail} alt={'?????? ?????????'}/>
                    </StoryThumnail>
                  </StoryImgDiv>
                  <StoryText>
                    <StoryTitle>{contentTitle}</StoryTitle>
                    <StoryDesc>{contentDescription}</StoryDesc>
                  </StoryText>
                </StyledButton>
              </ListItems>
            </SwiperSlide>
          ))}
        </Swiper>
      </StoryContainer>
    </Section>
  );
}

export default Story;