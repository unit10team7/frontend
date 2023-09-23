import React, { FormEvent, ReactNode } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Reply } from "../icons/Reply";

const TimeIcon = () => {
  return (
    <TimerText>
      <Reply />
    </TimerText>
  );
};

const TimerText = styled.text`
  font-size: 18px;
  display: flex;
  text-align: center;
  word-spacing: 30px;
  justify-content: space-between;
  padding-left: 50px;
  padding-bottom: 30px;
  color: black;
`;

export default TimeIcon;
