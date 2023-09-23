import { State } from "../../types";
import Camera from "../camera";

const CameraStep = ({
  state,
  setState,
}: {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}) => {
  return <Camera state={state} setState={setState} />;
};

export default CameraStep;
