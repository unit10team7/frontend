import React from "react";
import styled from "@emotion/styled";
import GlobalStyle from "../styles/GlobalStyle";

interface labelProps {
  label?: string;
  size?: string;
  color?: string;
}

const Label = ({ size, color }: labelProps) => {
  return (
    <LabelArea size={size} color={color}>
      한터차트 인기 아이돌 TOP5
    </LabelArea>
  );
};

export const LabelArea = styled.div<labelProps>`
  font-family: "gmarket-sansMedium", sans-serif;
  font-size: 18px;
  color: black;
  justify-content: center;
  padding-top: 160px;
  margin-left: 22px;
`;

export default Label;
