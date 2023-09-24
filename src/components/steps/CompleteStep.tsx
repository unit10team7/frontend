import styled from "@emotion/styled";
import html2canvas from "html2canvas";
import { useState } from "react";

import theme from "../../styles/theme";
import { State } from "../../types";
import Frame from "../Frame";
import Modal from "../Modal";
import Title from "../Title";
import DownloadIcon from "../icons/DownloadIcon";
import FireworkIcon from "../icons/FireworkIcon";

const CompleteStep = ({ state }: { state: State }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const saveAsImageHandler = async () => {
    const target = document.querySelector("#frame") as HTMLElement;

    if (!target) {
      return alert("결과 저장에 실패했습니다.");
    }

    const canvas = await html2canvas(target, { scale: 4 });

    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = canvas.toDataURL("image/png");
    link.download = "result.png";
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Frame
        {...state.frame}
        imgSrc={state.capture.map((captureItem, index) => ({ imageUrl: captureItem, id: index }))}
        style={{ transform: "scale(1.8)", transformOrigin: "bottom" }}
        isResult
      />

      <DownloadContainer>
        <button onClick={saveAsImageHandler}>
          <DownloadIcon />
        </button>
      </DownloadContainer>
      <Modal isOpen={isModalOpen} onOutsideClick={() => setIsModalOpen(false)}>
        <FireworkIcon />
        <Title>축하합니다!</Title>
        <Description>{`드디어 네컷 사진이 완성됐어요.\n지금 다운로드와 공유가 가능해요!`}</Description>
      </Modal>
    </Container>
  );
};

export default CompleteStep;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 120px);
  padding-top: 60px;
`;

const Description = styled.span`
  text-align: center;
  font-size: 14px;
  white-space: pre-wrap;
  color: ${theme.colors.black};
`;

const DownloadContainer = styled.div`
  display: flex;
  gap: 20px;
`;
