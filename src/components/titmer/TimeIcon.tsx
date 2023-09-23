// import React, { FormEvent, ReactNode } from "react";
import styled from "@emotion/styled";
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
  gap: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  color: black;
`;

export default TimeIcon;
