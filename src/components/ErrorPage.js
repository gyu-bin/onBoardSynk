import styled from "styled-components";
import Modal from "react-modal";
import React, {useState} from "react";

const ButtonArea=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
`

const ChoiceBtn=styled.button`
  font-size: 20px;
  color: #026070;
  font-weight: bold;
`

const ErrorPage=()=>{
  const [modal, setModal] = React.useState(true); // 모달창
  const [open, setOpen] = useState(false)
  const modalOff = () => {
    setModal(false);
  };
  return(
    <Modal
      isOpen={modal}
      ariaHideApp={false}
      onRequestClose={modalOff}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',

        },
        content: {
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "25px",
          outline: "none",
          width: '310px',
          height: '210px',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        },
      }}>
      <div>
        <div style={{fontSize: '17px', width: '95%', height: '100px', margin: '8px'}}>네트워크 연결이 원활하지 않습니다. 잠시 후 다시 시도해주세요.</div>
      </div>
      <ButtonArea>
        <ChoiceBtn aria-label="뒤로가기" onClick={() => {
          window.NativeInterface.closeView();
        }}>취소</ChoiceBtn>
        {/*<ChoiceBtn onClick={modalOff}>CMD</ChoiceBtn>*/}
      </ButtonArea>
    </Modal>
  )
}


export default ErrorPage