import React, { useEffect, useState, useRef } from "react";
import { default as ReactLottie } from "react-lottie";
import styled from "styled-components";

const LottieStyle = styled.div.attrs({
  "aria-hidden": true,
})`
  @media screen and (orientation: landscape) {
    width: 100%;
    height: 100%;
    transform: translate(0, -50%);
  }
`;

const Lottie = (props) => {
  const { src, loop, size, autoplay } = props;
  const isPercentSize = size.indexOf('%') !== -1;
  const [pxSize, setPxSize] = useState(300);
  const rectRef = useRef();

  const lottieOptions = {
    animationData: src,
    loop: loop || true,
    autoplay: autoplay || true,
    renderSettings: {},
    renderer: 'svg',
  }

  useEffect(() => {
    if (!src) {
      console.log('Warning: Add type or src to Lottie');
    }
  }, [src]);
  useEffect(() => {
    if (isPercentSize) {
      const inputPercentage = size.slice(0, -1) * 1;
      const boundRectWidth = rectRef.current.getBoundingClientRect().width;
      setPxSize(inputPercentage * boundRectWidth * 0.01);
    } else {
      setPxSize(size * 1);
    }
  }, [isPercentSize, pxSize, size]);
  return(
    <LottieStyle ref={rectRef} {...props}>
      <ReactLottie 
        isClickToPauseDisabled={true}
        options={lottieOptions}
        width={pxSize}
        height={pxSize}
      />
    </LottieStyle>
  )
}

export default React.memo(Lottie);