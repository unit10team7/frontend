import React, { FormEvent, ReactNode } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Reply } from "../icons/Reply";
import TimeIcon from "./TimeIcon";
import TimeSecond from "./TimeSecond";

export interface TimerProps {
  children: ReactNode;
  onClick?: void;
  time: string;
}

const TimerButton = () => {
  return (
    <TimerContainer>
      <TimeSecond />
      <TimeIcon />
    </TimerContainer>
  );
};

const TimerContainer = styled.button`
  background-color: ${theme.colors.gray};
  width: 314px;
  height: 50px;
  display: flex;
  border-radius: 30px;
  text-align: center;
  padding-left: 60px;
  padding-top: 9px;
`;

export default TimerButton;
