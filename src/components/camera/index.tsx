import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import { State } from "../../types";
import Control from "./Control";
import CameraView from "./View";

const MAX_COUNT = 4;

export type CameraType = "user" | "environment";

const Camera = ({
  state,
  setState,
}: {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}) => {
  const [cameraType, setCameraType] = useState<CameraType>("user");
  const [stepCount, setStepCount] = useState(0);
  const [photoImageList, setPhotoImage] = useState<string[]>([]);
  const [isTimerStart, setTimerStart] = useState(false);
  const [timerCount, setTimerCount] = useState(5);
  const [timerButton, setTimerButton] = useState(false);

  const webcamRef = useRef<Webcam>(null);
  const captureHandler = useCallback(() => {
    if (!webcamRef.current || stepCount === MAX_COUNT) return;

    const imageSrc = webcamRef.current.getScreenshot();

    if (imageSrc) {
      setPhotoImage((prev) => {
        return [...prev, imageSrc];
      });

      setState((prev) => {
        return { ...prev, capture: [...prev.capture, imageSrc] };
      });
    }
  }, [stepCount]);

  const handleCaptureAndStep = useCallback(() => {
    captureHandler();
    setStepCount((prevCount) => {
      const nextCount = prevCount + 1;

      if (nextCount <= MAX_COUNT) {
        return nextCount;
      }

      return prevCount;
    });
  }, [captureHandler]);

  const timerInfo = {
    timerCount: timerCount,
    isTimerStart: isTimerStart,
    handleCountdownComplete: () => {
      setTimerStart(false);
      handleCaptureAndStep();
    },
  };

  useEffect(() => {
    console.log(photoImageList);
  }, [photoImageList]);

  return (
    <Section>
      {/* 카메라 영역 */}
      <CameraView
        layoutType={state.frame.direction}
        ref={webcamRef}
        timerInfo={timerInfo}
        type={cameraType}
        url={state.pose.map((item) => item.imageUrl)}
        stepCount={stepCount}
      />
      {/* 카메라 제어 영역 */}
      <Control
        timerStartDispatcher={setTimerButton}
        timeDispatcher={setTimerCount}
        cameraStatusDispatcher={setCameraType}
        handleCapture={
          timerButton
            ? () => {
                setTimerStart(true);
              }
            : handleCaptureAndStep
        }
      />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export default Camera;
