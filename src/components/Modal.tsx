import { ReactNode } from "react";
import ReactModal from "react-modal";
import styled from "@emotion/styled";

import theme from "../styles/theme";

interface ModalProps {
  isOpen: boolean;
  onOutsideClick: () => void;
  children: ReactNode;
}

const customStyles = {
  overlay: {
    background: "rgba(16, 16, 16, 0.10)",
    backdropFilter: "blur(5px)",
  },
  content: {
    maxWidth: "410px",
    width: "calc(100% - 70px)",
    height: "256px",
    borderRadius: "15px",
    boxShadow: "0px 5px 10px 0px rgba(94, 94, 94, 0.25)",
    zIndex: "150",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.colors.white,
    overflow: "auto",
  },
};

const Modal = ({ isOpen, onOutsideClick, children }: ModalProps) => {
  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onOutsideClick}
      shouldCloseOnOverlayClick
    >
      <ModalContentsWrapper>{children}</ModalContentsWrapper>
    </ReactModal>
  );
};
export default Modal;

const ModalContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  height: 100%;
  align-items: center;
  justify-content: center;
`;
