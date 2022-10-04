import { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "components/Section";
import Title from "components/Title";
import IconDelivery from "images/onboard_title_ic_delivery.png";
import OrderImg0 from "images/onboard_delivery_ic_ready_ing.png";
import OrderImg1 from "images/onboard_delivery_ic_ready_done.png";
import OrderImg2 from "images/onboard_delivery_ic_delivery_ing.png";
import OrderImg3 from "images/onboard_delivery_ic_delivery_done.png";
import OrderNew from "images/icon_new.png";

const imgTemp = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAABFCAMAAADdE8vvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTNDOUUwQ0EzNTg3MTFFREFERjNDRjhDREI4RDJGNkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTNDOUUwQ0IzNTg3MTFFREFERjNDRjhDREI4RDJGNkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFM0M5RTBDODM1ODcxMUVEQURGM0NGOENEQjhEMkY2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFM0M5RTBDOTM1ODcxMUVEQURGM0NGOENEQjhEMkY2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq4hG+4AAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAALUlEQVR42uzBMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAC4mQADAE3lAAGLMw3cAAAAAElFTkSuQmCC';

const progressWidth = ({ step }) => {
  switch (step) {
    case 1:
      return `width: 36%`;
    case 2:
      return `width: 66%`;
    case 3:
      return `width: 100%`;
    default:
      break;
  }
}

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0 32px;
  background: ${({ theme }) => theme.colorSet.background_material_light};
`;

const StepText = styled.span`
  display: flex;
  padding-top: 15px;
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
  position: absolute;
  width: 16px;
  height: 16px;
  margin-top: -24px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colorSet.color_control_normal_ui_v};
  font-size: 0;
  background: ${({ theme }) => theme.colorSet.popup_background_color};
  img {
    display: none;
  }
  .done & {
    border: 0;
    background: ${({ theme }) => theme.colorSet.color_accent_ui};
  }
  .now & {
    width: 48px;
    height: 48px;
    margin-top: -40px;
    border: none;
    background: none;
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
      width:48px;
      height:48px;
      opacity: .5;
      background: ${({ theme }) => theme.colorSet.color_accent_ui};
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
  width: 68%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StepBox = styled.div`
  position:relative;
  display:flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &.now {
    img {
      display: block;
    }
  }
`;

const StepInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
  .date-msg {
    ${({ theme }) => theme.fontSet.Type_A08};
    font-weight: ${({ theme }) => theme.fontWeight.Regular};
    color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
    em{
      display: inline-block;
      margin-right: 4px;
      ${({ theme }) => theme.fontSet.Type_A08};
      font-style: normal;
      font-weight: ${({ theme }) => theme.fontWeight.Regular};
      color: ${({ theme }) => theme.colorSet.color_text_accent_ui};
    }
  }
`;

const StepBadge = styled.span`
  display: inline-block;
  width: 6%;
  max-width: 16px;
  height: 100%;
  padding: 3px 0;
  margin-left: 3px;
  background: url(${OrderNew}) no-repeat center center;
  background-size: 100%;
`;

const StepDash = styled.div`
  overflow: hidden;
  position: absolute;
  top: 22px;
  left: 12%;
  right: 12%;
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
  padding-top: 34px;
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
    case 'prepareDelivery':
    case 'postponedAcquisition':
    case 'postponedProduction':
    case 'postponedDelivery':
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

//getDeliveryMsg('2022-08-30T21:00:00', 'completeDelivery')
//getDeliveryMsg('2022-09-30T21:00:00', 'deliverying')
const getDeliveryMsg = (estimatedDeliveryDate, DeliveryStep) => {
  const dayArray = ['일', '월', '화', '수', '목', '금', '토'];
  const estimatedDate = new Date(estimatedDeliveryDate),
    today = new Date(),
    mm = estimatedDate.getMonth() + 1,
    dd = estimatedDate.getDate(),
    day = dayArray[estimatedDate.getDay()];
  const remainingDay = Math.floor((estimatedDate - today) / 1000 / 60 / 60 / 24);
  switch(DeliveryStep) {
    case 'ordered':
      return `<em>${mm}/${dd}(${day})</em> 도착 예정`;
    case 'prepareDelivery':
    case 'postponedAcquisition':
    case 'postponedProduction':
    case 'postponedDelivery':
      return `<em>${mm}/${dd}(${day})</em> 도착 예정`;
    case 'deliverying':
      if (remainingDay > 1) {
        return `<em>(도착 ${remainingDay}일 전) ${mm}/${dd}(${day})</em> 도착 예정`;
      } else {
        if (estimatedDate.getDate() === today.getDate()) {
          return `<em>(도착 당일) 오늘(${day})</em> 도착 예정`;
        } else {
          return `<em>(도착 1일 전) 내일(${day})</em> 도착 예정`;
        }
      }
    case 'completeDelivery':
      if (remainingDay < 1) {
        return `<em>(도착 ${Math.abs(remainingDay)}일 후) ${mm}/${dd}(${day})</em> 도착`;
      } else {
        if (estimatedDate.getDate() === today.getDate()) {
          return `<em>(도착 당일) 오늘(${day})</em> 도착`;
        } else {
          return `<em>(도착 1일 후) 어제(${day})</em> 도착`;
        }
      }
    default:
      break;
  }
}

const Delivery = ({
  deliveryData,
  estimatiedDate,
}) => {
  // console.log(deliveryData.url);
  const [deliveryStep, setDeliveryStep] = useState(0);
  useEffect(() => {
    console.log(deliveryData);
    if (deliveryData) {
      setDeliveryStep(getStep(deliveryData.status));
      console.log(getDeliveryMsg(estimatiedDate, deliveryData.status));
    }
  }, [deliveryData]);
  return (
    <>
      {(deliveryData?.constructor !== Object || (deliveryData?.status && deliveryData?.status !== 'canceledOrder')) && (
        <Section space={false}>
          <Title className={deliveryData ? "" : "title-box"} link={deliveryData ? deliveryData.url.split('||')[0] : 'https://naver.com'} iconSrc={deliveryData ? IconDelivery : ""} iconText={``}>
            {deliveryData ? "주문 현황" : "xxxxxxxxxx"}
          </Title>
          <DeliveryContainer>
            {!deliveryData && (
              <DeliveryStepArea>
                <StepInfo>
                  <StepDesc className="text-box">xxxxxxxxxxxxxxxxxxx</StepDesc>
                </StepInfo>
                <StepBar className="img-box">
                  <img src={imgTemp} alt="배송정보"/>
                </StepBar>
              </DeliveryStepArea>
            )}
            {deliveryData && (
              <DeliveryStepArea>
                {typeof deliveryStep === 'number' &&
                  <StepInfo>
                    <StepDesc>
                      <span className="date-msg" dangerouslySetInnerHTML={{__html: getDeliveryMsg(estimatiedDate, deliveryData.status)}}></span>
                      <StepBadge><span className="hidden-inline">NEW</span></StepBadge>
                    </StepDesc>
                  </StepInfo>}
                {typeof deliveryStep !== 'number' && <StepDesc>주문이 취소되었어요.</StepDesc>}
                <StepBar>
                  <StepDash>
                    {
                      <StepProgress step={deliveryStep}></StepProgress>
                    }
                  </StepDash>
                  <StepArea>
                    {
                      deliveryLabel.map(( item, id ) => {
                        const done = id < deliveryStep;
                        const now = id === deliveryStep;
                        return (
                          <StepBox key={`delivery_step_${id}`} className={`step-box ${now ? "now" : ""} ${done ? "done" : ""}`}>
                            <StepIcon className="step-icon"><StepImg src={deliveryImg[deliveryStep]} alt="" aria-hidden={true} /></StepIcon>
                            <StepText className="step-text" tabIndex={0} role="text">
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
            )}
          </DeliveryContainer>
        </Section>
      )}
    </>
  );
}

export default Delivery;