import styled from "styled-components";
import React from "react";

const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index:3;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 25px;
  right: 25px;
  padding: 20px 25px;
  min-height: 150px;
  max-height: 400px;
  justify-content: space-between;
  background: #fff;
  border-Radius: 25px;
  transform: translate(0%, -50%);
`;
const ModalTitle = styled.div`
  margin: 0 0 25px 0;
  ${({ theme }) => theme.fontSet.Type_A12};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_dark};
  text-align: left;
`;
const ModalContent = styled.div`
  ${({ theme }) => theme.fontSet.Type_A10};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  color: ${({ theme }) => theme.colorSet.primary_text_default_material_light};
  overflow-y: overlay;
  overflow-x: hidden;
`;
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
`;
const BtnClose = styled.button`
  font-size: 20px;
  color: #026070;
  font-weight: 600;
`;
const Modal = ({
  content,
  closeAction,
  title,
}) => {
  return(
    <ModalArea>
      <ModalContainer>
        {title && (
          <ModalTitle>
            {title}
          </ModalTitle>
        )}
        <ModalContent dangerouslySetInnerHTML={{__html: content}}/>
        <ButtonArea>
          <BtnClose aria-label="뒤로가기" onClick={() => {
            closeAction();
          }}>확인</BtnClose>
        </ButtonArea>
      </ModalContainer>
    </ModalArea>
  )
}


export default Modal