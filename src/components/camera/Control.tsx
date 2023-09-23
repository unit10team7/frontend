import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";

import CameraSwitchIcon from "../icons/CameraSwitchIcon";
import CameraIcon from "../icons/CameraIcon";
import CamerTimerIcon from "../icons/CamerTimerIcon";

import { CameraType } from ".";

interface ControlProps {
  handleCapture: () => void;
  timeDispatcher: Dispatch<SetStateAction<number>>;
  cameraStatusDispatcher: Dispatch<SetStateAction<CameraType>>;
  timerStartDispatcher: Dispatch<SetStateAction<boolean>>;
}

const Control = ({
  cameraStatusDispatcher,
  handleCapture,
  timeDispatcher,
  timerStartDispatcher,
}: ControlProps) => {
  const [isSelectorTimer, setTimer] = useState(false);
  const [selectorStatus, setselectorStatus] = useState(0);

  const handleCameraSwitch = () => {
    cameraStatusDispatcher((prevStatus) => {
      if (prevStatus === "user") {
        return "environment";
      }

      return "user";
    });
  };

  const handleTimerVisible = () => {
    setTimer((prevState) => {
      return !prevState;
    });
  };

  if (isSelectorTimer) {
    return (
      <Container>
        <TimerContainer>
          <TimerGroup>
            <TimerFont
              style={{
                color: selectorStatus === 1 ? "#9E00FF" : undefined,
              }}
              onClick={() => {
                timeDispatcher(5);
                handleTimerVisible();
                setselectorStatus(1);
                timerStartDispatcher(true);
              }}
            >
              5초
            </TimerFont>
            <TimerFont
              style={{
                color: selectorStatus === 2 ? "#9E00FF" : undefined,
              }}
              onClick={() => {
                timeDispatcher(10);
                handleTimerVisible();
                setselectorStatus(2);
                timerStartDispatcher(true);
              }}
            >
              10초
            </TimerFont>
            <TimerFont
              style={{
                color: selectorStatus === 3 ? "#9E00FF" : undefined,
              }}
              onClick={() => {
                timeDispatcher(15);
                handleTimerVisible();
                setselectorStatus(3);
                timerStartDispatcher(true);
              }}
            >
              15초
            </TimerFont>
          </TimerGroup>
          <button onClick={handleTimerVisible}>
            <CamerTimerIcon />
          </button>
        </TimerContainer>
      </Container>
    );
  }

  return (
    <Container>
      <button onClick={handleCameraSwitch}>
        <CameraSwitchIcon />
      </button>
      <button onClick={handleCapture}>
        <CameraIconContainer>
          <CameraIcon />
        </CameraIconContainer>
      </button>
      <button onClick={handleTimerVisible}>
        <CamerTimerIcon />
      </button>
    </Container>
  );
};

const TimerFont = styled.button`
  font-size: 18px;
`;

const TimerGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const TimerContainer = styled.div`
  background: #f0f1f3;
  width: 314px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 12px;
`;

const CameraIconContainer = styled.div`
  background: #434343;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 180px;
`;

const Container = styled.div`
  min-height: 128px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default Control;
