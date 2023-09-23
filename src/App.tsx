import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import CTAButton from "./components/CTAButton";
import Arrow from "./components/icons/Arrow";
import CameraStep from "./components/steps/CameraStep";
import CompleteStep from "./components/steps/CompleteStep";
import FrameSelectStep from "./components/steps/FrameSelectStep";
import PhotoSelectStep from "./components/steps/PhotoSelectStep";
import useStep from "./hooks/useStep";
import { State } from "./types";

const defaultState: State = {
  pose: [],
  frame: { direction: "vertical", color: "black", id: -1 },
  capture: [],
};

function App() {
  const [width, setWidth] = useState<number>(0);
  const [state, setState] = useState<State>(defaultState);

  useEffect(() => {
    setWidth((document.querySelector("#layout")?.getBoundingClientRect().width ?? 0) - 32);
  }, []);

  const elements = [
    <PhotoSelectStep key="PhotoSelectStep" state={state} setState={setState} />,
    <FrameSelectStep key="FrameSelectStep" state={state} setState={setState} />,
    <CameraStep key="CameraStep" />,
    <CompleteStep key="CompleteStep" />,
  ];

  const { currentElement, currentStep, moveBackward, moveForward } = useStep({
    elements: elements,
  });

  const getCTAState = (currentStep: number): { isActive: boolean; text: string } => {
    switch (currentStep) {
      case 0: {
        return {
          isActive: state.pose.length === 4,
          text: state.pose.length === 4 ? "다음으로" : `${state.pose.length}/4`,
        };
      }
      case 1: {
        return {
          isActive: state.frame.id !== -1,
          text: "다음으로",
        };
      }
      case 2: {
        return {
          isActive: state.capture.length === 4,
          text: "다음으로",
        };
      }
      default: {
        return {
          isActive: false,
          text: "다음으로",
        };
      }
    }
  };

  return (
    <main>
      {currentStep > 0 && (
        <Header>
          <button onClick={() => moveBackward()}>
            <Arrow />
          </button>
        </Header>
      )}
      {currentElement}
      {elements.length - 1 > currentStep && currentStep < 2 && (
        <FixedCTAButton
          width={width}
          onClick={() => moveForward()}
          isActive={getCTAState(currentStep).isActive}
        >
          {getCTAState(currentStep).text}
        </FixedCTAButton>
      )}
    </main>
  );
}

export default App;

const FixedCTAButton = styled(CTAButton)<{ width: number }>`
  position: fixed;
  bottom: 28px;
  width: ${({ width }) => width}px;
  z-index: 9999;
`;

const Header = styled.header`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
