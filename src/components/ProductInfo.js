import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "components/Section";
import Title from "components/Title";
import IconProExp from "images/onboard_info_product_ic_expendables.png";
import IconProBook from "images/onboard_info_product_ic_productbook.png";
import IconInfo from "images/onboard_title_ic_info.png";
import IconPlay from "images/btn_contents_play.png";
import Button from "components/atom/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Portal from "components/Portal";
import BottomSheet from "components/BottomSheet";

const imgTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAsAAAJXCAMAAADCeC0zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjRBNjJENzgyRTY2MTFFRDkyRDJDQjI4N0VCNzI0MTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjRBNjJENzkyRTY2MTFFRDkyRDJDQjI4N0VCNzI0MTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE2MkQ3NjJFNjYxMUVEOTJEMkNCMjg3RUI3MjQxMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNEE2MkQ3NzJFNjYxMUVEOTJEMkNCMjg3RUI3MjQxMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmwiqqQAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAACc0lEQVR42uzBMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4mQADAHibAAH8kTxoAAAAAElFTkSuQmCC';

const imgTemp2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADXCAMAAAC+ozSHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1MEU0MUQyRTY2MTFFREIwMjhBMTRCMUU2NjY2QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1MEU0MUUyRTY2MTFFREIwMjhBMTRCMUU2NjY2QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzUwRTQxQjJFNjYxMUVEQjAyOEExNEIxRTY2NjZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzUwRTQxQzJFNjYxMUVEQjAyOEExNEIxRTY2NjZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsL8TV4AAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAR0lEQVR42uzBAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7yaAAAMAtWgAARlggcUAAAAASUVORK5CYII='

const tempData = [
  {idx:0},
  {idx:1},
  {idx:2},
];

const IconCore = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-right: 4px;
  background-size: 100% !important;
`;

const IconGuide = styled(IconCore)`
  background: url(${IconProExp}) no-repeat center center;
`;

const IconBuy = styled(IconCore)`
  background: url(${IconProBook}) no-repeat center center;
`;

const InfoContainer = styled.div`
  position: relative;
  padding: 0 20px;
  .swiper-slide {
    width: 40%;
  }
  &.bg {
    margin-top: 20px;
    padding-bottom: 30px;
    background: ${({ theme }) => theme.colorSet.onboard_color_type1}; 
  }
`;

const InfoProduct = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  font-size: 0;
`;

const InfoThumnail = styled.div`
  position: relative;
  display: flex;
  padding-top: 23%;
  flex-basis: 23%;
  margin-right: 16px;
`;

const InfoThumnailImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  height: 100%;
`;

const ThumnailBox = styled.div`
  display: flex;
  align-self: flex-start;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const InfoDesc = styled.div`
  display: flex;
  flex-basis: 74.3%;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const InfoProductName = styled.div`
  ${({ theme }) => theme.fontSet.Type_A08};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
`;

const InfoModelName = styled.div`
  margin-top: 2px;
  ${({ theme }) => theme.fontSet.Type_A06};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.secondary_text_default_material_light};
`;

const InfoSupport = styled.div`
  position: relative;
  margin-top: 23px;
  display: flex;
  justify-content: space-between;
`;

const InfoTitle = styled.div`
  padding: 13px 0 12px;
  margin-bottom: 12px;
  ${({ theme }) => theme.fontSet.Type_A06};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
`;

const StyledButton = styled(Button)`
`;

const ListItems = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  a {
    flex-direction: column;
  }
`;

const TipImg = styled.img`
  width: 100%;
`;

const TipInfo = styled.div`
  position: relative;
  margin-top: 5px;
`;

const TipThumnail = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  font-size: 0;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(${IconPlay}) no-repeat center center;
    background-size: 100%;
  }
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
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
`;
const ProductInfo = ({ 
  productData,
  productName,
}) => {
  const [guideUrl, setGuideUrl] = useState();
  //console.log(productData);
  useEffect(() => {
    if (productData) {
      setGuideUrl(productData.guideUrl);
    }
  }, [productData])
  const [bottomSheetOn, setBottomSheetOn] = useState(false);
  const showBottomSheet = (show) => {
    setBottomSheetOn(show);
  }
  return(
    <>
      <Section style={{ paddingBottom: "0" }}>
        <Title className={productData ? "" : "title-box"} iconSrc={productData ? IconInfo : ""} iconText={`??????`}>
          {productData ? "?????? ??????" : "xxxxxxxxxx"}
        </Title>
        <InfoContainer>
          {!productData && (
            <>
              <InfoProduct>
                <InfoThumnail>
                  <ThumnailBox>
                    <InfoThumnailImg className="img-box" src={imgTemp2} alt="?????? ?????????" />
                  </ThumnailBox>
                </InfoThumnail>
                <InfoDesc>
                  <InfoProductName className="text-box">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</InfoProductName>
                  <InfoModelName className="text-box">xxxxxxxxxxx</InfoModelName>
                </InfoDesc>
              </InfoProduct>
            </>
          )}
          {productData && (
            <>
              <InfoProduct>
                <InfoThumnail>
                  <ThumnailBox>
                    <InfoThumnailImg src={productData.modelThumbnail} alt={productData.productName}/>
                  </ThumnailBox>
                </InfoThumnail>
                <InfoDesc>
                  <InfoProductName>{productName}</InfoProductName>
                  <InfoModelName>{productData.productName}</InfoModelName>
                </InfoDesc>
              </InfoProduct>
              <InfoSupport>
                {typeof productData.guideUrl === 'object' && (
                  <StyledButton type={`type1`} onClick={() => {
                    showBottomSheet(true);
                  }}>
                    <IconGuide />???????????????
                  </StyledButton>
                )}
                {typeof productData.guideUrl === 'string' && (
                  <StyledButton type={`type1`} href={productData.guideUrl}>
                    <IconGuide />???????????????
                  </StyledButton>
                )}
                <StyledButton type={`type1`} href={productData.consumablesUrl}>
                  <IconBuy />????????? ??????
                </StyledButton>
              </InfoSupport>
            </>
          )}
        </InfoContainer>
        {productData && productData.videoContents.length > 0 && (
          <InfoContainer className="bg">
            <InfoTitle className={productData ? "" : "title-box"}>
              {productData ? "?????? ?????? ??? ??????????????????." : "xxxxxxxxxx"}
            </InfoTitle>
            <Swiper spaceBetween={10} slidesPerView={"auto"} loop={productData && productData.length > 1 ? true : false}>
              {!productData && tempData.map((data, idx) =>
                <SwiperSlide key={`product_${idx}`}>
                  <ListItems>
                    <StyledButton href={""}>
                      <TipImg src={imgTemp} alt=""/>
                      <TipInfo>
                        <ListTitle className="text-box">xxxxxxxxxxx</ListTitle>
                      </TipInfo>
                    </StyledButton>
                  </ListItems>
                </SwiperSlide>
              )}
              {productData && productData.videoContents.map(({ contentId, contentUrl, thumbnail, title }) => (
                <SwiperSlide key={`product_${contentId}`}>
                  <ListItems>
                    <StyledButton href={contentUrl}>
                      <TipThumnail><TipImg src={thumbnail} alt={'????????? ?????????'}/></TipThumnail>
                      <TipInfo>
                        <ListTitle>{title}</ListTitle>
                      </TipInfo>
                    </StyledButton>
                  </ListItems>
                </SwiperSlide>
              ))}
            </Swiper>
          </InfoContainer>
        )}
      </Section>
      {productData && productData.videoContents.length < 1 && (
        <div style={{marginTop: "20px", background: "rgb(236, 236, 236)", height: "18px"}}></div>
      )}
      <Portal>
        {bottomSheetOn && (
          <BottomSheet showBottomSheet={showBottomSheet} title={"??????????????? ??????"} guideUrl={guideUrl}></BottomSheet>
        )}
      </Portal>
    </>
  );
}

export default ProductInfo;