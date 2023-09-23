//import Camera from "./components/Camera";
// import { Slider } from "./components/Slider";
// import Title from "./components/Title";
// import Label from "./components/Label";
import Camera from "./components/Camera";
import Mainpage from "./pages/Mainpage";
import CTAButton from "./components/CTAButton";
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
      <button onClick={() => moveBackward()}>뒤로가기</button>
      {currentElement}
      {elements.length - 1 > currentStep && (
        <CTAButton onClick={() => moveForward()}>다음스텝으로</CTAButton>
      )}
    </main>
  );
}

export default App;
