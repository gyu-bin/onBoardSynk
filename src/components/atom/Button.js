import React from "react";
import styled from "styled-components";
import Text from "components/atom/Text";
import Ripple from "components/effect/Ripple";

const ButtonStyled = styled.button`
  position: relative;
  display: flex;
  overflow: hidden;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
  &[type="type1"] {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-basis: calc(50% - 6px);
    align-items: center;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colorSet.color_control_normal_ui};
    ${({ theme }) => theme.fontSet.Type_A08};
    color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
    background: ${({ theme }) => theme.colorSet.background_material_light};
  }
`;

const TextStyled = styled(Text)`
  flex: 1;
  padding-bottom: 1px;
`;

const Button = ({ type, href, text, children, onClick, onTouchStart, onTouchEnd, noRipple, ...props }) => {
  return (
    <Ripple noRipple={href ? false : onClick ? false : true}>
      <ButtonStyled
        as={href ? "a" : onClick ? "button" : "span"}
        role={href ? "link" : onClick ? "button" : "none"}
        type={type ? type : ""}
        className={type}
        href={href}
        tabIndex={href || onClick ? "0" : ""}
        onClick={(e) => {
          e.stopPropagation();
          onClick && onClick();
        }}
        onTouchStart={(e) => {
          //e.stopPropagation();
          onTouchStart && onTouchStart();
        }}
        onTouchEnd={(e) => {
          //e.stopPropagation();
          onTouchEnd && onTouchEnd();
        }}
        {...props}
      >
        {children}
        {text && <TextStyled>{text}</TextStyled>}
      </ButtonStyled>
    </Ripple>
  )
}

export default Button;