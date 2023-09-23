import styled from "@emotion/styled";

export interface SecondProps {
  name: string;
}

const Five = () => {
  return (
    <div>
      <TimerText> 5초 </TimerText>
    </div>
  );
};

const TimerText = styled.text`
  font-size: 18px;
  word-spacing: 30px;
  flex-direction: row;
  justify-content: space-between;
  color: black;
`;

export default Five;
