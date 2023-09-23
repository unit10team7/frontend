// import React from "react";
import styled from "@emotion/styled";
// import GlobalStyle from "../styles/GlobalStyle";

interface labelProps {
  label?: string;
  size?: string;
  color?: string;
  children?: string;
}

const Label = ({ size, color, children }: labelProps) => {
  return (
    <LabelArea size={size} color={color}>
      한티 차트 아이돌 TOP 5
    </LabelArea>
  );
};

export const LabelArea = styled.div<labelProps>`
  font-family: "gmarket-sansMedium", sans-serif;
  font-size: 18px;
  text-align: left;
  color: black;
  justify-content: center;
  padding-top: 10px;
  margin-left: 22px;
`;

export default Label;
