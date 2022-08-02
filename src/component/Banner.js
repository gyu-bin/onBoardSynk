import React from 'react';
import styled from 'styled-components';
import { onBoardMockData } from "../mock";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  font-size: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 10%;
  position: relative;
`;

const BannerText = styled.h2`
  position: absolute;
  bottom: 5%;
  left: 5%;
  text-align: left;
  white-space: pre-wrap;
  color: #7f574f;
`;

const Main = styled.div`
  position: relative;
  font-size: 34px;
  line-height: 40px;
  font-weight: 700;
`;

const Sub = styled.div`
  position: relative;
  margin-top: 8px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
`;

const Banner = () => {
  const Api = onBoardMockData.banner;
  console.log(Api);

  return(
    <BannerContainer>
      <Img src={Api.bannerUrl} alt={`배경 이미지`}/>
      <BannerText>
        <Main>
          {
            Api.bannerText.split('<br />').map(( line, id ) => {
              return (
                <span key={id}>{line}<br /></span>
              )
            })
          }
        </Main>
        <Sub>{Api.bannerDesc}</Sub>
      </BannerText>
    </BannerContainer>
  )
}

export default Banner;