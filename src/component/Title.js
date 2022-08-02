import React from 'react';
import styled, { css } from 'styled-components';
import IconNext from "../images/icon_next.png";

const TitleStyle = ({ arrow }) => css`
  ${arrow !== false && `
    content:"";
    display: inline-block;
    width: 8px;
    height: 12px;
    margin-left: 5px;
    background: url("${IconNext}") no-repeat center center;
    background-size: 100%;
  `};
`;

const TitleContainer = styled.div`
  position: relative;
  padding: 20px 0 17px 0;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  flex-basis: auto;
  flex-shrink: 0;
  &:after {
    ${TitleStyle};
  }
  &.hidden-arrow:after {
    display: none;
  }
`;

const TitleBox = styled.h3`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 15px;
  line-height: 21px;
`;

const Icon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  img {
      width: 100%;
  }
`;

const Title = ({ children, link, iconSrc, iconText, arrow, ...props }) => {
  return (
    <TitleContainer {...props}>
      <TitleBox>
        <Link href={link} arrow={arrow}>
          {iconSrc && <Icon><img src={iconSrc} alt={iconText} /></Icon>}
          {children}
        </Link>
      </TitleBox>
    </TitleContainer>
  );
}

export default Title;

