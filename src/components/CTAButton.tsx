import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ReactNode } from "react";

import theme from "../styles/theme";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: ReactNode;
}

const CTAButton = ({ isActive = false, children, ...props }: CTAButtonProps) => {
  return (
    <Button isActive={isActive} {...props}>
      {children}
    </Button>
  );
};

export default CTAButton;

const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 21px;
  width: 100%;
  height: 64px;
  border-radius: 15px;
  background-color: ${({ isActive }) => (isActive ? theme.colors.primary : theme.colors.gray)};
  color: ${theme.colors.white};
  cursor: ${({ isActive }) => (isActive ? "pointer" : "default")};
`;
