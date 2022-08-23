import { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "components/Section";
import Title from "components/Title";
import IconInfo from "images/icon_info.png";
import OrderImg0 from "images/icon_delivery_step0.png";
import OrderImg1 from "images/icon_delivery_step1.png";
import OrderImg2 from "images/icon_delivery_step2.png";
import OrderImg3 from "images/icon_delivery_step3.png";
import OrderNew from "images/icon_new.png";

const imgTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADXCAMAAAC+ozSHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1MEU0MUQyRTY2MTFFREIwMjhBMTRCMUU2NjY2QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1MEU0MUUyRTY2MTFFREIwMjhBMTRCMUU2NjY2QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzUwRTQxQjJFNjYxMUVEQjAyOEExNEIxRTY2NjZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzUwRTQxQzJFNjYxMUVEQjAyOEExNEIxRTY2NjZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsL8TV4AAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAR0lEQVR42uzBAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7yaAAAMAtWgAARlggcUAAAAASUVORK5CYII=';

const progressWidth = ({ step }) => {
  switch (step) {
    case 1:
      return `width: 36%`;
    case 2:
      return `width: 69%`;
    case 3:
      return `width: 100%`;
    default:
      break;
  }
}

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 32px;
  background: ${({ theme }) => theme.colorSet.background_material_light};
`;

const StepText = styled.span`
  display: inline-block;
  padding-top: 5px;
  color: ${({ theme }) => theme.colorSet.color_control_normal_ui};
  ${({ theme }) => theme.fontSet.Type_A06};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  .now &,
  .done & {
    color: ${({ theme }) => theme.colorSet.color_text_accent_ui};
  }
  .now & {
    font-weight: ${({ theme }) => theme.fontWeight.Bold};
  }
`;

const StepIcon = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  margin-top: -4px;
  border-radius: 50%;
  font-size: 0;
  background: ${({ theme }) => theme.colorSet.color_control_normal_ui_v};
  img {
    display: none;
  }
  &:after,
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 12px;
    height: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: ${({ theme }) => theme.colorSet.popup_background_color};
  }
  &:after {
    display: none;
    width:48px;
    height:48px;
    opacity: .5;
    background: ${({ theme }) => theme.colorSet.color_accent_ui};
  }
  .done & {
    background: ${({ theme }) => theme.colorSet.color_accent_ui};
  }
  .now & {
    width: 48px;
    height: 48px;
    background: none;
    &:after {
      display: inline-block;
    }
    &:before{
      width: 36px;
      height: 36px;
      border: 2px solid ${({ theme }) => theme.colorSet.color_accent_ui};
      background: ${({ theme }) => theme.colorSet.popup_background_color};
      z-index: 1;
    }
  }
  .done & {
    width: 16px;
    height: 16px;
    &:before{
      width: 12px;
      height: 12px;
      background: ${({ theme }) => theme.colorSet.color_accent_ui};
    }
  }
`;

const StepImg = styled.img`
  height: auto;
  position: absolute;
  width: 48%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StepBox = styled.div`
  position:relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &.now {
    margin-top: -14px;
    img {
      display: block;
    }
  }
`;

const StepInfo = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const StepDesc = styled.span`
  display: inline-block;
  ${({ theme }) => theme.fontSet.Type_A08};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
  &.hide {
    display: none;
  }
`;

const StepDate = styled.span`
  display: inline-block;
  margin-right: 4px;
  color: ${({ theme }) => theme.colorSet.color_text_accent_ui};
`;

const StepBadge = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-left: 3px;
  background: url(${OrderNew}) no-repeat center center;
  background-size: 100%;
`;

const StepDash = styled.div`
  overflow: hidden;
  position: absolute;
  top: 22px;
  left: 20px;
  right: 20px;
  height: 2px;
  z-index: 0;
  background: ${({ theme }) => theme.colorSet.color_control_normal_ui_v};
`;

const StepProgress = styled.div`
  position: relative;
  height: 100%;
  width: 0;
  background: ${({ theme }) => theme.colorSet.color_accent_ui};
  ${progressWidth}
`;

const StepBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 5px;
`;

const StepArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 14px;
`;

const DeliveryStepArea = styled.div`
  width: 100%;
  padding: 0 28px;
  box-sizing: border-box;
  text-align: center;
`;

/**
 * step: -1 추문 취소
 * step: 0 준비중
 * step: 1 준비완료
 * step: 2 배송중
 * step: 3 배송완료
 */
const deliveryLabel = ["준비중", "준비완료", "배송중", "배송완료"];
const deliveryImg = [OrderImg0, OrderImg1, OrderImg2, OrderImg3];
const getStep = (status) => {
  let stepCount = 0;
  switch (status) {
    case 'ordered':
      stepCount = 0;
      break;
    case 'prepareDeliver':
      stepCount = 1;
      break;
    case 'deliverying':
      stepCount = 2;
      break;
    case 'completeDelivery':
      stepCount = 3;
      break;
    default:
      break;
  }
  return stepCount;
}
const Delivery = ({deliveryData}) => {
  console.log(deliveryData);
  const [deliveryStep, setDeliveryStep] = useState(0);
  useEffect(() => {
    console.log(deliveryData);
    if (deliveryData) {
      setDeliveryStep(getStep(deliveryData.status));
    }
  }, [deliveryData]);
  return (
    <>
      {!deliveryData && (
        <Section>
          <Title link={`https://`} iconSrc={IconInfo} iconText={`정보`}>
            주문 현황
          </Title>
          <DeliveryContainer>
            <DeliveryStepArea className="img-box">
            </DeliveryStepArea>
          </DeliveryContainer>
        </Section>
      )}
      {deliveryData && (
        <Section>
          <Title link={`https://`} iconSrc={IconInfo} iconText={`정보`}>
            주문 현황
          </Title>
          <DeliveryContainer>
            <DeliveryStepArea>
              {typeof deliveryStep === 'number' &&
              <StepInfo>
                <StepDate>8/25(수)</StepDate>
                <StepDesc>{deliveryData.message}</StepDesc>
                <StepBadge><span className="hidden-inline">NEW</span></StepBadge>
              </StepInfo>}
              {typeof deliveryStep !== 'number' && <StepDesc>주문이 취소되었어요.</StepDesc>}
              <StepBar>
                <StepArea>
                  <StepDash>
                    {
                      <StepProgress step={deliveryStep}></StepProgress>
                    }
                  </StepDash>
                  {
                    deliveryLabel.map(( item, id ) => {
                      const done = id < deliveryStep;
                      const now = id === deliveryStep;
                      return (
                        <StepBox key={`delivery_step_${id}`} className={`${now ? "now" : ""} ${done ? "done" : ""}`}>
                          <StepIcon><StepImg src={deliveryImg[deliveryStep]} alt="" aria-hidden={true} /></StepIcon>
                          <StepText tabIndex={0} role="text">
                            {now && <span className="hidden-inline">현재 상태 </span>}
                            {item}
                          </StepText>
                        </StepBox>
                      )
                    })
                  }
                </StepArea>
              </StepBar>
            </DeliveryStepArea>
          </DeliveryContainer>
        </Section>
      )}
    </>
  );
}

export default Delivery;