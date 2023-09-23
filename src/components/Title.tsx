import styled from "@emotion/styled";
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

export default Title;
