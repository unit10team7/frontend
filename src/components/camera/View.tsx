import styled from "@emotion/styled";
import { forwardRef, useLayoutEffect, useState } from "react";
import Webcam from "react-webcam";

import useCountdown from "../../hooks/useCountdown";

import { CameraType } from ".";

const FORMAT_TPYE = "image/jpeg";
const DISABLE_AUDIO = false;

interface CameraViewProps {
  type: CameraType;
  stepCount: number;
  url: string[];
  timerInfo: TimerProps;
  layoutType: LayoutType;
}

interface TimerProps {
  timerCount: number;
  isTimerStart: boolean;
  handleCountdownComplete: () => void;
}

type LayoutType = "vertical" | "square";

const CameraView = forwardRef<Webcam, CameraViewProps>(function CameraView(
  { type, stepCount, timerInfo, url, layoutType },
  ref,
) {
  const [size, setSize] = useState<number>(0);

  const layout = document.querySelector("#layout") as HTMLElement;

  useLayoutEffect(() => {
    setSize((layout.offsetWidth ?? 0) - 32);
  }, [layout.offsetWidth]);

  const videoConstraints = {
    facingMode: type,
    width: { min: 100, max: 10000, ideal: size },
    height: { min: 100, max: 10000, ideal: window.innerHeight - 128 },
  };

  return (
    <View>
      <Timer
        timerCount={timerInfo.timerCount}
        isTimerStart={timerInfo.isTimerStart}
        handleCountdownComplete={timerInfo.handleCountdownComplete}
      />
      <Step stepCount={stepCount} layout={layoutType} />
      <PosePhoto url={url[stepCount]} layout={layoutType} />
      <Webcam
        ref={ref}
        audio={DISABLE_AUDIO}
        mirrored
        screenshotFormat={FORMAT_TPYE}
        videoConstraints={videoConstraints}
      />
    </View>
  );
});

const Timer = ({ isTimerStart, timerCount, handleCountdownComplete }: TimerProps) => {
  const [currentCount] = useCountdown(timerCount, isTimerStart, handleCountdownComplete);

  return (
    <TimerContainer>
      <TimerFont isActive={isTimerStart}>{currentCount}</TimerFont>
    </TimerContainer>
  );
};

const Step = ({ stepCount, layout }: { stepCount: number; layout: LayoutType }) => {
  const currentStep = `${stepCount}/4`;

  return (
    <StepFontContainer layout={layout}>
      <StepFont layout={layout}>{currentStep}</StepFont>
    </StepFontContainer>
  );
};

const PosePhoto = ({ url, layout }: { url: string; layout: LayoutType }) => {
  return (
    <PhotoContainer layout={layout}>
      <PhotoCard src={url} layout={layout} />
    </PhotoContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const TimerFont = styled.span<{ isActive: boolean }>`
  font-weight: 500;
  color: #ffffff;
  font-size: 96px;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
`;

const StepFontContainer = styled.div<{ layout: LayoutType }>`
  display: flex;
  ${(props) => (props.layout === "square" ? " justify-content: center;" : undefined)}
  align-items: flex-start;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  ${(props) => (props.layout === "square" ? "left: 0;" : "left: 145px;")}
  margin: auto;
  z-index: 1;
  padding-top: 37px;
`;

const StepFont = styled.span<{ layout: LayoutType }>`
  font-weight: 700;
  color: #ffffff;
  font-size: 22px;
  text-align: center;
  ${(props) => (props.layout === "square" ? undefined : "transform: rotate(90deg)")}
`;

// square square
const PhotoContainer = styled.div<{ layout: LayoutType }>`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  ${(props) => (props.layout === "square" ? "bottom: 0;" : "top: 0;")}
  z-index: 1;
`;

const PhotoCard = styled.img<{ layout: LayoutType }>`
  border-radius: 5px;
  width: 124px;
  height: 180px;
  ${(props) => (props.layout === "square" ? "margin-bottom: 22px;" : "margin-top: 22px;")}
  margin-left: 14px;
  max-width: 100%;
  height: auto;
`;

const View = styled.div`
  flex: 1;
  min-height: 80dvh;
  width: 100%;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export default CameraView;
