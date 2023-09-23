import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import CTAButton from "./components/CTAButton";
import CameraStep from "./components/steps/CameraStep";
import CompleteStep from "./components/steps/CompleteStep";
import FrameSelectStep from "./components/steps/FrameSelectStep";
import PhotoSelectStep from "./components/steps/PhotoSelectStep";
import useStep from "./hooks/useStep";
import { State } from "./types";

const defaultState: State = {
  pose: [],
  frame: { direction: "vertical", color: "black" },
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
    <FrameSelectStep key="FrameSelectStep" />,
    <CameraStep key="CameraStep" />,
    <CompleteStep key="CompleteStep" />,
  ];

  const { currentElement, currentStep, moveBackward, moveForward } = useStep({
    elements: elements,
  });

  const isCTAActive = state.pose.length === 4;

  return (
    <main>
      {currentStep > 0 && <button onClick={() => moveBackward()}>뒤로가기</button>}
      {currentElement}
      {elements.length - 1 > currentStep && (
        <FixedCTAButton width={width} onClick={() => moveForward()} isActive={isCTAActive}>
          {isCTAActive ? "다음으로" : `${state.pose.length}/4`}
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
