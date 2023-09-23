import React, { FormEvent, ReactNode } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Reply } from "../icons/Reply";
import TimeIcon from "./TimeIcon";

const TimeSecond = () => {
  return (
    <div>
      <TimerText> 5초 10초 15초 </TimerText>
      {/* <TimerText> 10초</TimerText>
      <TimerText> 15초</TimerText> */}
    </div>
  );
};

const TimerText = styled.text`
  font-size: 18px;
  word-spacing: 15px;
  justify-content: space-between;
  color: black;
  padding-top: 7.5px;
`;

export default TimeSecond;
