import React from "react";
import styled, { css } from "styled-components";
import Button from "components/atom/Button";
import IconNext from "images/icon_next.png";

const TitleStyle = ({ arrow }) => css`
  ${arrow !== false && `
    content:"";
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-left: 5px;
    background: url("${IconNext}") no-repeat center center;
    background-size: 100%;
  `};
`;

const TitleContainer = styled.div`
  position: relative;
  padding: 18px 0;
`;

const StyledButton = styled(Button)`
  display: flex;
  flex: 1;
  align-items: center;
  flex-basis: auto;
  flex-shrink: 0;
  justify-content: space-between;
  &:after {
    ${TitleStyle};
  }
`;

const TitleBox = styled.h3`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  ${({ theme }) => theme.fontSet.Type_A09};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
`;

const Icon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 15px;
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

