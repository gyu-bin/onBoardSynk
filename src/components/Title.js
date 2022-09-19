import React from "react";
import styled, { css } from "styled-components";
import Button from "components/atom/Button";
import IconNext from "images/icon_next.png";

const TitleStyle = ({ arrow }) => css`
  ${arrow !== false && `
    content:"";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 5px;
    background: url("${IconNext}") no-repeat center center;
    background-size: 100%;
  `};
`;

const TitleContainer = styled.div`
  position: relative;
  padding: 6px 20px;
  margin-bottom: 5px;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  flex-basis: auto;
  &:after {
    ${TitleStyle};
  }
`;

const TitleBox = styled.h3`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  ${({ theme }) => theme.fontSet.Type_A06};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

const Icon = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 4px;
  img {
      width: 100%;
  }
`;

const Title = ({ children, link, iconSrc, iconText, arrow, onClick, ...props }) => {
  return (
    <TitleContainer {...props}>
      <TitleBox>
        <StyledButton text={children} href={link} onClick={onClick} arrow={link ? true : onClick ? true : false}>
          {iconSrc && <Icon><img src={iconSrc} alt={iconText} /></Icon>}
        </StyledButton>
      </TitleBox>
    </TitleContainer>
  );
}

export default Title;

