import styled from "@emotion/styled";

import { State } from "../../types";
import Title from "../Title";
import frames from "../../constants/frames";
import Frame, { FrameProps } from "../Frame";

const FrameSelectStep = ({
  state,
  setState,
}: {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}) => {
  const onFrameClick = (frame: Pick<FrameProps, "id" | "direction" | "color">) => () => {
    setState((prev) => {
      const prevFrame = prev.frame;

      if (frame.id === prevFrame.id)
        return { ...prev, frame: { direction: "vertical", color: "black", id: -1 } };
      return { ...prev, frame };
    });
  };
  return (
    <Container>
      <Title>{`프레임을\n선택해주세요`}</Title>
      <FramesContainer>
        {frames.map((frame) => (
          <StyledButton key={frame.id} onClick={onFrameClick(frame)}>
            <Frame {...frame} imgSrc={state.pose} isChecked={state.frame.id === frame.id} />
          </StyledButton>
        ))}
      </FramesContainer>
    </Container>
  );
};

export default FrameSelectStep;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FramesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
