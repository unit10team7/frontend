import styled from "@emotion/styled";

import StyledImg from "./StyledImg";

interface CardProps {
  direction: "vertical" | "horizontal";
  url: string;
}

const Card = ({ direction, url }: CardProps) => {
  return (
    <Container direction={direction}>
      <StyledImg src={url} />
    </Container>
  );
};

export default Card;

const Container = styled.div<Pick<CardProps, "direction">>`
  display: flex;

  /* width: ${({ direction }) => (direction === "vertical" ? "140px" : "240px")}; */
  height: ${({ direction }) => (direction === "vertical" ? "240px" : "132px")};
  border-radius: 16px;
  overflow: hidden;
`;
