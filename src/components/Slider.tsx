import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Card from "./Card";
import Label from "./Label";

export const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2.5,
      spacing: 17,
    },
  });
  return (
    <div>
      <div ref={ref} className="keen-slider">
        <Card className="keen-slider__slide">1</Card>
        <Card className="keen-slider__slide">2</Card>
        <Card className="keen-slider__slide">3</Card>
        <Card className="keen-slider__slide">4</Card>
        <Card className="keen-slider__slide">5</Card>
        <Card className="keen-slider__slide">6</Card>
        <Card className="keen-slider__slide">7</Card>
        <Card className="keen-slider__slide">8</Card>
        <Card className="keen-slider__slide">9</Card>
        <Card className="keen-slider__slide">10</Card>
      </div>
    </div>
  );
};
