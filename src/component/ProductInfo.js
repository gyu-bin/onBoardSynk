import React from "react";
import styled from "styled-components";
import Section from "components/Section";
import Title from "components/Title";
import IconInfo from "images/icon_info.png";
import Button from "components/atom/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const imgTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAsAAAJXCAMAAADCeC0zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjRBNjJENzgyRTY2MTFFRDkyRDJDQjI4N0VCNzI0MTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjRBNjJENzkyRTY2MTFFRDkyRDJDQjI4N0VCNzI0MTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE2MkQ3NjJFNjYxMUVEOTJEMkNCMjg3RUI3MjQxMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNEE2MkQ3NzJFNjYxMUVEOTJEMkNCMjg3RUI3MjQxMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmwiqqQAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAACc0lEQVR42uzBMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4mQADAHibAAH8kTxoAAAAAElFTkSuQmCC';

const tempData = [
  {idx:0},
  {idx:1},
  {idx:2},
];

const IconCore = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 2px;
  background-size: 15px !important;
`;

const IconGuide = styled(IconCore)`
  background: url(${IconInfo}) no-repeat center center;
`;

const IconBuy = styled(IconCore)`
  background: url(${IconInfo}) no-repeat center center;
`;

const InfoContainer = styled.div`
  position: relative;
  .swiper-slide {
    width: 40%;
  }
  &.space {
    padding-left: 20px;
    padding-right: 20px;
  }
  &.bg {
    background: ${({ theme }) => theme.colorSet.list_separator_background_color}; 
  }
`;

const InfoProduct = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 0;
`;

const InfoThumnail = styled.div`
  position: relative;
  overflow: hidden;
  flex-basis: 31%;
  padding-top: 31%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colorSet.background_material_dark_10};
`;

const InfoThumnailImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const InfoDesc = styled.div`
  flex-basis: 69%;
  padding-left: 16px;
  box-sizing: border-box;
`;

const InfoProductName = styled.div`
  ${({ theme }) => theme.fontSet.Type_A12};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
`;

const InfoModelName = styled.div`
  ${({ theme }) => theme.fontSet.Type_A08};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.secondary_text_default_material_light};
`;

const InfoSupport = styled.div`
  position: relative;
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
`;

const InfoTitle = styled.div`
  padding: 20px 0;
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
`;

const TipThumnail = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  font-size: 0;
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

const ProductInfo = ({ productData }) => {
  console.log(productData);
  return(
    <Section style={{ padding: 0 }}>
      <InfoContainer className="space">
        <Title className={productData ? "" : "title-box"} iconSrc={productData ? IconInfo : ""} iconText={`정보`}>
          {productData ? "제품 정보" : "xxxxxxxxxx"}
        </Title>
        <InfoProduct>
          <InfoThumnail>
            <InfoThumnailImg src={productData.modelThumbnail} alt={productData.productName}/>
          </InfoThumnail>
          <InfoDesc>
            <InfoProductName>{productData.productName}</InfoProductName>
            <InfoModelName>{productData.modelName}</InfoModelName>
          </InfoDesc>
        </InfoProduct>
        <InfoSupport>
          <StyledButton type={`type1`} href={productData.guideUrl}>
            <IconGuide />사용설명서
          </StyledButton>
          <StyledButton type={`type1`} href={productData.consumablesUrl}>
            <IconBuy />소모품 구매
          </StyledButton>
        </InfoSupport>
      </InfoContainer>
      <InfoContainer className="space bg" style={{ marginTop: "20px" }}>
        <InfoTitle>제품 설치 전 확인해주세요.</InfoTitle>
        <Swiper spaceBetween={10} slidesPerView={"auto"} loop={true}>
          {!productData && tempData.map((data, idx) => 
            <SwiperSlide>
              <ListItems key={`product_${idx}`}>
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
            <SwiperSlide>
              <ListItems key={`product_${contentId}`}>
                <StyledButton href={contentUrl}>
                  <TipThumnail><TipImg src={thumbnail} alt={'체험기 이미지'}/></TipThumnail>
                  <TipInfo>
                    <ListTitle>{title}</ListTitle>
                  </TipInfo>
                </StyledButton>
              </ListItems>
            </SwiperSlide>
          ))}
        </Swiper>
      </InfoContainer>
    </Section>
  );
}

export default ProductInfo;