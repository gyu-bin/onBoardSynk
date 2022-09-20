import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const BottomSheetContainer = styled.div`
  display:flex;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  top:calc(100vh - ${({contentH}) => {
    if (contentH !== 0) {
      return 68 + contentH;
    } else {
      return 0;
    }
  }}px);
  transition:all .5s;
  overflow:hidden;
  background:rgb(255,255,255);
  z-index:11;
  border-radius:20px 20px 0 0;
`;
const BottomSheetContent = styled.div`
  display:flex;
  position:relative;
  padding:24px 0 0 0;
  width:100%;
  flex-direction:column;
  align-items:stretch;
  justify-content:space-between;
`;
const BottomSheetHeader = styled.div`
  display:flex;
  padding:0 24px 15px;
  min-height:29px;
  align-items:flex-end;
  font-weight:600;
`;
const BottomSheetBody = styled.div`
  display:flex;
  flex:1 1 0%;
  flex-direction:column;
`;
const ContentList = styled.li`
  display:flex;
  position:relative;
  align-items:center;
  padding:0 24px;
  min-height:50px;
  &:before{
    content:'';
    position:absolute;
    left:24px;
    right:24px;
    top:0;
    height:1px;
    background:rgb(230,230,230);
  }
  &:first-of-type:before{
    display:none;
  }
`;
const Shadow = styled.div`
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background:rgba(0,0,0,.5);
  z-index:10;
`;
const BottomSheet = ({
                       showBottomSheet,
                       title,
                       guideUrl
                     }) => {
  const [contentH, setContentH] = useState(0);
  const timeout = useRef();
  //console.log(guideUrl);
  useEffect(() => {
    timeout.current = setTimeout(() => {
      setContentH(guideUrl.length * 50);
    }, 100);
    return () => {
      clearTimeout(timeout.current);
    }
  }, []);
  return (
    <>
      <BottomSheetContainer contentH={contentH}>
        <BottomSheetContent>
          <BottomSheetHeader role="heading" aria-level="1" tabindex="0">{title}</BottomSheetHeader>
          <BottomSheetBody>
            <ul>
              {guideUrl && guideUrl.map((data, idx) => {
                return (
                  <ContentList key={`guide_${idx}`}><a href={data}>설명서{idx + 1}</a></ContentList>
                );
              })}
            </ul>
          </BottomSheetBody>
        </BottomSheetContent>
      </BottomSheetContainer>
      <Shadow onClick={() => {
        setContentH(0);
        timeout.current = setTimeout(() => {
          showBottomSheet(false);
        }, 500);
      }}/>
    </>
  );
}

export default BottomSheet;
