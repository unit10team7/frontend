import styled from "@emotion/styled";

import theme from "../styles/theme";
import CheckIcon from "./icons/CheckIcon";

interface FrameProps {
  direction: "vertical" | "square";
  color: keyof typeof theme.colors;
  imgSrc: string[];
  checked?: boolean;
}

const Frame = ({ direction, color, imgSrc, checked }: FrameProps) => {
  return (
    <Container direction={direction} color={color}>
      {checked && (
        <IconContainer>
          <CheckIcon />
        </IconContainer>
      )}
      {direction === "vertical" ? (
        imgSrc.map((img, index) => <StyledImg key={index} src={img} width={80} height={48} />)
      ) : (
        <>
          <SquareImgContainer side="left">
            {imgSrc.map(
              (img, index) =>
                (index === 0 || index === 2) && (
                  <StyledImg key={index} src={img} width={52} height={80} />
                ),
            )}
          </SquareImgContainer>
          <SquareImgContainer side="right">
            {imgSrc.map(
              (img, index) =>
                (index === 1 || index === 3) && (
                  <StyledImg key={index} src={img} width={52} height={80} />
                ),
            )}
          </SquareImgContainer>
        </>
      )}
    </Container>
  );
};

export default Frame;

const Container = styled.div<Pick<FrameProps, "color" | "direction">>`
  position: relative;
  width: ${({ direction }) => (direction === "vertical" ? "100px" : "128px")};
  height: ${({ direction }) => (direction === "vertical" ? "232px" : "184px")};
  background-color: ${({ color }) => theme.colors[color]};

  display: flex;
  flex-direction: ${({ direction }) => (direction === "vertical" ? "column" : "row")};
  gap: ${({ direction }) => (direction === "vertical" ? "4px" : "8px")};
  padding: ${({ direction }) => (direction === "vertical" ? " 12px 10px 16px 10px" : "8px")};
`;

const SquareImgContainer = styled.div<{ side: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  justify-content: ${({ side }) => (side === "left" ? "flex-start" : "flex-end")};
`;

const StyledImg = styled.img`
  object-fit: cover;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
