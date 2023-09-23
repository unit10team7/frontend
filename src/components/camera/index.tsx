import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import Control from "./Control";
import CameraView from "./View";

const MAX_COUNT = 4;
const TEST_IMG_URL =
  "https://dimg.donga.com/ugc/CDB/WEEKLY/Article/64/c3/43/fd/64c343fd0e85d2738250.jpg";

export type CameraType = "user" | "environment";

const Camera = () => {
  const [cameraType, setCameraType] = useState<CameraType>("user");
  const [stepCount, setStepCount] = useState(0);
  const [photoImageList, setPhotoImage] = useState<string[]>([]);
  const [isTimerStart, setTimerStart] = useState(false);
  const [timerCount, setTimerCount] = useState(5);

  const webcamRef = useRef<Webcam>(null);
  const captureHandler = useCallback(() => {
    if (!webcamRef.current || stepCount === MAX_COUNT) return;

    const imageSrc = webcamRef.current.getScreenshot();

    if (imageSrc) {
      setPhotoImage((prev) => {
        return [...prev, imageSrc];
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
      handleCaptureAndStep();
      setTimerStart(false);
    },
  };

  useEffect(() => {
    console.log(photoImageList);
  }, [photoImageList]);

  return (
    <Section>
      {/* 카메라 영역 */}
      <CameraView
        layoutType="vertical"
        ref={webcamRef}
        timerInfo={timerInfo}
        type={cameraType}
        url={TEST_IMG_URL}
        stepCount={stepCount}
      />
      {/* 카메라 제어 영역 */}
      <Control
        timerStartDispatcher={setTimerStart}
        timeDispatcher={setTimerCount}
        cameraStatusDispatcher={setCameraType}
        handleCapture={handleCaptureAndStep}
      />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export default Camera;
