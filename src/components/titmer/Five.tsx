import styled from "@emotion/styled";

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
  display-direction: flex-row;
  justify-content: space-between;
  color: black;
`;

export default Five;
