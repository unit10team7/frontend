import styled from "@emotion/styled";
// import { HtmlAttributes } from "csstype";

interface CardProps {
  direction?: "vertical" | "horizontal";
  className: string;
  children: any;
}

const Card = ({ direction, className }: CardProps) => {
  return (
    <Container className={className} direction={direction}>
      {/* <img src={} /> */}
    </Container>
  );
};

const Container = styled.div<Pick<CardProps, "direction">>`
  width: ${({ direction }) => (direction === "vertical" ? "140px" : "240px")};
  height: ${({ direction }) => (direction === "vertical" ? "240px" : "132px")};
  border-radius: 16px;
  background-color: red;
`;

export default Card;
