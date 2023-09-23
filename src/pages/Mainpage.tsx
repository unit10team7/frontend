import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import Label from "../components/Label";
import Frame from "../components/Frame";
import styled from "@emotion/styled";
import { Slider } from "../components/Slider";

export interface MainProps {
  className?: string;
  children: any;
}

export interface MiddleProps {
  className?: string;
  children: any;
}

const Mainpage = (props: any) => {
  return (
    <MainContainer>
      <Title />
      <MiddleContainer>
        <Label />
        <Slider />
      </MiddleContainer>
      <MiddleContainer>
        <Label />
        <Slider />
      </MiddleContainer>
      <MiddleContainer>
        <Label />
        <Slider />
      </MiddleContainer>
      <MiddleContainer>
        <Label />
        <Slider />
      </MiddleContainer>
    </MainContainer>
  );
};

export const MainContainer = styled.div<MainProps>`
  font-family: "gmarket-sans", sans-serif;
  font-size: 30px;
  color: #9e00ff;
  height: 100vh;
  text-align: left;
  justify-content: center;
  margin-left: 22px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  pading-bottom: 5px;
`;

export const MiddleContainer = styled.div<MiddleProps>`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export default Mainpage;
