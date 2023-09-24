import styled from "@emotion/styled";

import categories from "../../constants/categories";
import Slider from "../Slider";
import Title from "../Title";
import { State } from "../../types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const PhotoSelectStep = ({
  state,
  setState,
}: {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}) => {
  return (
    <Container>
      <Title>{`포즈를 4개\n선택해주세요`}</Title>
      <SliderContainer>
        {categories.map((category) => (
          <Slider
            key={category.id}
            categoryId={category.id}
            label={category.title}
            state={state}
            setState={setState}
          />
        ))}
      </SliderContainer>
    </Container>
  );
};

export default PhotoSelectStep;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 120px;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;
