import styled from "@emotion/styled";

import StyledImg from "./StyledImg";
import WhiteCheckIcon from "./icons/WhiteCheckIcon";

interface CardProps {
  direction: "vertical" | "horizontal";
  url: string;
  isChecked?: boolean;
}

const Card = ({ direction, url, isChecked = false }: CardProps) => {
  return (
    <Container direction={direction}>
      {isChecked && (
        <IconContainer>
          <WhiteCheckIcon />
        </IconContainer>
      )}
      <StyledImg src={url} />
    </Container>
  );
};

export default Card;

const Container = styled.div<Pick<CardProps, "direction">>`
  display: flex;

  max-width: ${({ direction }) => (direction === "vertical" ? "140px" : "240px")} !important;
  height: ${({ direction }) => (direction === "vertical" ? "240px" : "132px")} !important;
  border-radius: 16px;
  overflow: hidden;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
