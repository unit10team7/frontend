import { FrameProps } from "../components/Frame";

export interface ImgSrc {
  id: number;
  categoryId: number;
  imageUrl: string;
}

export interface State {
  pose: ImgSrc[];
  frame: Pick<FrameProps, "direction" | "color">;
  capture: string[];
}
