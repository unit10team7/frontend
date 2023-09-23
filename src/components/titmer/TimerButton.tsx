import React, { FormEvent, ReactNode } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { ReplyIcon } from "../icons/replyicon";

export interface TimerProps {
  children: ReactNode;
  onClick?: void;
  time: string;
}

const TimerButton = () => {
  return (
    <TimerContainer>
      <TimerText>5초 10초 15초</TimerText>
      <TimerText>
        <ReplyIcon />
      </TimerText>
    </TimerContainer>
  );
};

const TimerContainer = styled.button`
  background-color: ${theme.colors.gray};
  width: 314px;
  height: 50px;
  display: flex;
  border-radius: 30px;
`;

const TimerText = styled.text`
  font-size: 18px;
  display: flex;
  text-align: center;
  flex-direction: row;
  word-spacing: 25px;
  margin-left: 35px;
  margin-top: 12px;
  justify-content: space-between;
`;

export default TimerButton;
