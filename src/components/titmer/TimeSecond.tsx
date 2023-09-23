// import React, { FormEvent, ReactNode } from "react";
import styled from "@emotion/styled";
// import theme from "../../styles/theme";
// import { Reply } from "../icons/Reply";
// import TimeIcon from "./TimeIcon";
import Five from "./Five";
import Ten from "./Ten";
import Fifteen from "./Fifteen";

const TimeSecond = () => {
  return (
    <TimerText>
      <Five />
      <Ten />
      <Fifteen />
    </TimerText>
  );
};

const TimerText = styled.text`
  font-size: 18px;
  word-spacing: 30px;
  color: black;
  display: flex;
  gap: 35px;
`;

export default TimeSecond;
