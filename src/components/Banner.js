import React from "react";
import styled from "styled-components";
import Lottie from "components/lottie/Lottie";
import bannerBG from "images/banner_bg.png";
import SuggestionLottie from "components/lottie/Onboard_Suggestion_motion.json";
import TeaserLottie from "components/lottie/Onboard_TeaserPopup_motion.json";

const bannerTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADXCAMAAAC+ozSHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1MEU0MUQyRTY2MTFFREIwMjhBMTRCMUU2NjY2QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1MEU0MUUyRTY2MTFFREIwMjhBMTRCMUU2NjY2QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzUwRTQxQjJFNjYxMUVEQjAyOEExNEIxRTY2NjZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzUwRTQxQzJFNjYxMUVEQjAyOEExNEIxRTY2NjZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsL8TV4AAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAR0lEQVR42uzBAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7yaAAAMAtWgAARlggcUAAAAASUVORK5CYII=';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  transition: all 0.5s;
  font-size: 0;
  background: ${({ theme }) => theme.colorSet.onboard_color_type2};
  @media screen and (orientation: landscape) {
    max-height: 300px;
    text-align: right;
  }
`;

const BannerBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 10%;
  position: relative;
  @media screen and (orientation: landscape) {
    max-width: 42%;
  }
`;

const BannerText = styled.h2`
  position: absolute;
  bottom: 5%;
  left: 5%;
  text-align: left;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
`;

const Main = styled.div`
  position: relative;
  ${({ theme }) => theme.fontSet.Type_A14};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

const Sub = styled.div`
  position: relative;
  margin-top: 8px;
  ${({ theme }) => theme.fontSet.Type_A12};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
`;

/**
 * JavaScript에서 true && expression은 항상 expression으로 평가되고
 *  false && expression은 항상 false로 평가됩니다.

따라서 && 뒤의 엘리먼트는 조건이 true일때 출력이 됩니다. 
조건이 false라면 React는 무시하고 건너뜁니다.

 */
const Banner = ({ 
  bannerData,
  productName,
}) => {
  return(
    <BannerContainer className={bannerData ? "" : "banner-box"}>
      <Img src={bannerData ? bannerBG : bannerTemp} alt={`배경 이미지`}/>
      {bannerData && (
        <BannerBox>
          <Lottie src={TeaserLottie} size="100%" />
        </BannerBox>
      )}
      <BannerText tabIndex="0">
        <Main>
          {bannerData && (
            <>
              <span>당신이 알아야 할</span><br/>
              <span>'{productName} 사용팁'</span>
            </>
          )}
          {!bannerData && (
            <>
              <span className="text-box">xxxxxxxx</span><br/>
              <span className="text-box">xxxxx xxxxx</span>
            </>
          )}
        </Main>
      </BannerText>
    </BannerContainer>
  )
}

export default Banner;