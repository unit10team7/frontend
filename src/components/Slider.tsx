import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import { useGetSlider } from "../hooks/apis/useGetSlider";
import { ImgSrc, State } from "../types";
import Card from "./Card";
import useObserver from "../hooks/useObserver";

interface SliderProps {
  categoryId: number;
  label: string;
  direction?: "vertical" | "horizontal";
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

const Slider = ({ categoryId, label, direction = "vertical", state, setState }: SliderProps) => {
  const { status, data, isSuccess, fetchNextPage, isFetching, hasNextPage } =
    useGetSlider(categoryId);

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  const onCardClick = (item: ImgSrc) => () => {
    setState((prev) => {
      const prevPose = prev.pose;

      const targetIndex = prevPose.findIndex(
        (pose) => `${pose.categoryId}_${pose.id}` === `${item.categoryId}_${item.id}`,
      );

      if (targetIndex === -1 && state.pose.length < 4) {
        return { ...prev, pose: [...prevPose, item] };
      }

      if (targetIndex !== -1) {
        return {
          ...prev,
          pose: [...prevPose.slice(0, targetIndex), ...prevPose.slice(targetIndex + 1)],
        };
      }

      return prev;
    });
  };

  return (
    <Container>
      <StyledSpan>{label}</StyledSpan>
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{ width: "100%", height: "100%" }}
      >
        {isSuccess &&
          data &&
          data?.pages.map((page) => {
            const { data } = page;
            return data.map((item) => (
              <SwiperSlide key={item.id} onClick={onCardClick({ ...item, categoryId })}>
                <Card
                  direction={direction}
                  url={item.imageUrl}
                  isChecked={
                    !!state.pose.find(
                      (poseItem) =>
                        `${categoryId}_${item.id}` === `${poseItem.categoryId}_${poseItem.id}`,
                    )
                  }
                />
              </SwiperSlide>
            ));
          })}
        {!isFetching && hasNextPage && (
          <SwiperSlide>
            <div
              style={{ width: "10px", height: "10px" }}
              ref={status === "success" ? setTarget : null}
            />
          </SwiperSlide>
        )}
      </Swiper>
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
