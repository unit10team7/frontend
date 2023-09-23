import styled from "@emotion/styled";

import theme from "../styles/theme";

const Title = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <StyledH1 {...props}>{children}</StyledH1>;
};

export default Title;

const StyledH1 = styled.h1`
  color: ${theme.colors.primary};
  font-size: 28px;
  white-space: pre-wrap;
`;
