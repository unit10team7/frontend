import styled from "@emotion/styled";

const Ten = () => {
  return (
    <div>
      <TimerText> 10초 </TimerText>
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

export default Ten;
