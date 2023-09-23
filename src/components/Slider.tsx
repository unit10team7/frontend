import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styled from "@emotion/styled";

import Card from "./Card";
import { ImgSrc } from "../types";

interface SliderProps {
  label: string;
  imgSrc: ImgSrc[];
  direction?: "vertical" | "horizontal";
}

const Slider = ({ label, imgSrc, direction = "vertical" }: SliderProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: 2.5,
      spacing: 13,
    },
  });

  return (
    <Container>
      <StyledSpan>{label}</StyledSpan>
      <div ref={ref} className="keen-slider">
        {imgSrc.map((img) => (
          <div key={img.id} className="keen-slider__slide">
            <Card direction={direction} url={img.url} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const StyledSpan = styled.span`
  font-size: 18px;
`;
