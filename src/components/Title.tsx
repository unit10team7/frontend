import styled from "@emotion/styled";
<<<<<<< HEAD
import { ReactNode } from "react";
import theme from "../styles/theme";

export interface titleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

const Title = ({ children, ...props }: titleProps) => {
  return <StyledSpan {...props}>{children}</StyledSpan>;
};

const StyledSpan = styled.h1`
  font-size: 20px;

  white-space: pre-wrap;
  color: ${theme.colors.primary};
`;

=======

import theme from "../styles/theme";

const Title = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <StyledH1 {...props}>{children}</StyledH1>;
};

>>>>>>> 86056464ecb9cd7ef7a5cb6f958a174a43aae619
export default Title;

const StyledH1 = styled.h1`
  color: ${theme.colors.primary};
  font-size: 28px;
  white-space: pre-wrap;
`;
