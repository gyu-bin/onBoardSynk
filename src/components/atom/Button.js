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
  &[type="type1"] {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-basis: calc(50% - 6px);
    padding: 8px 0;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colorSet.color_control_normal_ui};
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
        type={type ? type : ""}
        className={type}
        href={href}
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