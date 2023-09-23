import { FrameProps } from "../components/Frame";

const frames: Pick<FrameProps, "direction" | "color" | "id">[] = [
  { id: 0, direction: "vertical", color: "black" },
  { id: 1, direction: "vertical", color: "white" },
  { id: 2, direction: "square", color: "skyblue" },
  { id: 3, direction: "square", color: "primary" },
];

export default frames;
