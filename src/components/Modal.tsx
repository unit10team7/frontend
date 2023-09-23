import { ReactNode } from "react";
import ReactModal from "react-modal";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </ReactModal>
  );
};
export default Modal;
