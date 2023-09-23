// import React from "react";
import styled from "@emotion/styled";
// import GlobalStyle from "../styles/GlobalStyle";

interface titleProps {
  titles?: string;
  size?: string;
  color?: string;
}

const Title = ({ size, color }: titleProps) => {
  return (
    <TextArea size={size} color={color}>
      포즈를 4개
      <br />
      선택해주세요
    </TextArea>
  );
};

export const TextArea = styled.div<titleProps>`
  font-family: "gmarket-sans", sans-serif;
  font-size: 30px;
  color: #9e00ff;
  height: 100vh;
  text-align: left;
  justify-content: center;
  padding-top: 80px;
  margin-left: 22px;
`;

export default Title;
