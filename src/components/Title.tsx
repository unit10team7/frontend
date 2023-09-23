// import React from "react";
import styled from "@emotion/styled";
// import GlobalStyle from "../styles/GlobalStyle";

export interface titleProps {
  titles?: string;
  size?: string;
  color?: string;
  children?: any;
}

const Title = ({ size, color, titles, children }: titleProps) => {
  return (
    <TextArea size={size} color={color} titles={titles}>
      포즈를 4개 <br /> 선택해주세요
    </TextArea>
  );
};

export const TextArea = styled.div<titleProps>`
  font-family: "gmarket-sansbold", sans-serif;
  font-size: 20px;
  color: #9e00ff;
  height: 100vh;
  text-align: left;
  justify-content: center;
  padding-top: 80px;
  margin-left: 22px;
`;

export default Title;
