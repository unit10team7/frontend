import styled from "@emotion/styled";
// import { HtmlAttributes } from "csstype";
import Label from "./Label";

export interface CardProps {
  direction?: "vertical" | "horizontal";
  className: string;
  children: any;
}

const Card = ({ direction, className }: CardProps) => {
  return (
    <div>
      {/* <Label>한터차트 인기아이돌 TOP5</Label> */}
      <Container className={className} direction={direction}>
        {/* api 자리 */}
      </Container>
    </div>
  );
};

const Container = styled.div<Pick<CardProps, "direction">>`
  width: ${({ direction }) => (direction === "vertical" ? "140px" : "240px")};
  height: ${({ direction }) => (direction === "vertical" ? "240px" : "132px")};
  border-radius: 16px;
  background-color: red;
`;

export default Card;
