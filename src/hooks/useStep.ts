import { cloneElement, useState, type ReactElement } from "react";

interface useStepParams {
  initial?: number;
  max?: number;
  elements: ReactElement[];
}

const useStep = ({ initial = 0, max = Infinity, elements }: useStepParams) => {
  const [currentStep, setCurrentStep] = useState(initial);

  const moveBackward = (n?: number) => {
    if (0 >= currentStep) return;
    setCurrentStep((prevStep) => prevStep - (n ? n : 1));
  };

  const moveForward = (n?: number) => {
    if (currentStep >= max) return;
    setCurrentStep((prevStep) => {
      if (prevStep === max) return prevStep;

      return prevStep + (n ? n : 1);
    });
  };

  return {
    currentElement: cloneElement(elements[currentStep]),
    currentStep,
    moveBackward,
    moveForward,
  };
};

export default useStep;
