import CTAButton from "./components/CTAButton";
import Camera from "./components/Camera";
import CameraStep from "./components/steps/CameraStep";
import CompleteStep from "./components/steps/CompleteStep";
import FrameSelectStep from "./components/steps/FrameSelectStep";
import PhotoSelectStep from "./components/steps/PhotoSelectStep";
import useStep from "./hooks/useStep";

const elements = [
  <PhotoSelectStep key="PhotoSelectStep" />,
  <FrameSelectStep key="FrameSelectStep" />,
  <CameraStep key="CameraStep" />,
  <CompleteStep key="CompleteStep" />,
];

function App() {
  const { currentElement, currentStep, moveBackward, moveForward } = useStep({
    elements: elements,
  });

  return (
    <main>
      {currentElement}
      {elements.length - 1 > currentStep && (
        <CTAButton onClick={() => moveForward()}>다음스텝으로</CTAButton>
      )}
    </main>
  );
}

export default App;
