import React, { useState, useEffect, Children } from "react";
import styled from "styled-components";

const StyledRippleEffect = styled.span`
  display: inline-block;
  transform: scale(.4);
  border-radius: 50%;
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  opacity: 0;
  background: ${({ theme }) => theme.colorSet.color_ripple_material_light_20};
`;

const StyledRippleOutSide = styled.span`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: inherit;
  pointer-events: none;
  opacity: 0;
  background: ${({ theme }) => theme.colorSet.color_ripple_material_light_20};

  @keyframes ripple-effect-outside {
    0% {
      opacity: .5;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes ripple-effect-inside {
    0% {
      opacity: .8;
    }
    100% {
      opacity: 0;
      transform: scale(2);
    }
  }

  &.action {
    animation-fill-mode: forwards;
    animation-delay: 0ms;
    animation-name: ripple-effect-outside;
    animation-duration: 1000ms;
    pointer-events: none;
  }
`;

const StyledRippleEffectInside = styled(StyledRippleEffect)`
  .action > & {
    animation-fill-mode: forwards;
    animation-delay: 0ms;
    animation-name: ripple-effect-inside;
    animation-duration: 1000ms;
    pointer-events: none;
  }
`;

const Ripple = ({ children, noRipple }) => {
  const [isRippledStart, setIsRippledStart] = useState(false);
  const [isRippledEnd, setIsRippledEnd] = useState(false);

  useEffect(() => {
    // console.log(isRippledStart);
    // console.log(isRippledEnd);
    // console.log(noRipple);
  }, [isRippledStart, isRippledEnd]);

  const rippleEventBinder = (props) => {
    return {
      onTouchEnd: (event) => {
        setIsRippledEnd(false);
        setIsRippledStart(true);
        props.onTouchEnd && props.onTouchEnd(event);
      },
      onClick: (event) => {
        setIsRippledStart(false);
        setIsRippledEnd(true);
        props.onClick && props.onClick(event);
      },
    }
  }

  return (
    <>
      {
        Children.only(children) && React.cloneElement(children, {
          ...children.props,
          ...rippleEventBinder(children.props),
          children: [
            <StyledRippleOutSide
              aria-hidden={true}
              className={noRipple !== true && isRippledStart === false && isRippledEnd === true ? "action" : "stop"}>
              <StyledRippleEffectInside/>
            </StyledRippleOutSide>,
            children.props.children,
          ]
        })
      }
    </>
  );
};

export default Ripple;