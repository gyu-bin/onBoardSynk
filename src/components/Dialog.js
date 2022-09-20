import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import ModalPortal from "../components/ErrorPage";
import Modal from "../components/BottomSheet";

const Dialog = props => {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <>
      <div>
        <button onClick={handleModal}>1</button>
        <ModalPortal>
          {modalOn && <Modal onClose={handleModal} />}
        </ModalPortal>
      </div>
    </>
  );
};

export default Dialog;